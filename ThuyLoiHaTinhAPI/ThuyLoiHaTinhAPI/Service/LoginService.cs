using Newtonsoft.Json.Linq;
using Npgsql;
using System;
using System.Data;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.Text.Json.Nodes;
using System.Net.Mail;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using MimeKit;
using MailKit.Net.Smtp;
using ThuyLoiHaTinhAPI.Models;
using ThuyLoiHaTinhAPI.Dto;

namespace ThuyLoiHaTinhAPI.Service
{
    public class LoginService : ILoginService
    {
        private readonly IConfiguration _config;

        public LoginService(IConfiguration config)
        {
            _config = config;
        }

        // Validate user and return a JsonObject containing user information
        public async Task<LoginDto> ValidateUser(string username, string password)
        {
            using (var conn = new NpgsqlConnection(_config.GetConnectionString("FrameworkNpgsql")))
            {
                await conn.OpenAsync();
                var sql = @"SELECT us.*, cq.cq_ten, cq.cq_tinhid, cq.cq_pid, cqct.cq_ten AS ten_cqcaptren,
                           ush.hopq, usd.dappq, ustb.trambompq, hh.httnpq
                    FROM sys_member us
                    LEFT JOIN sys_coquan cq ON us.mem_cq_id = cq.cq_id
                    LEFT JOIN sys_coquan cqct ON cq.cq_pid = cqct.cq_id
                    LEFT JOIN (SELECT user_id, STRING_AGG(ho_uuid::text, ',') hopq FROM sys_user_ho WHERE loai_congtrinh = 63 GROUP BY user_id) ush
                          ON us.mem_id = ush.user_id
                    LEFT JOIN (SELECT user_id, STRING_AGG(ho_uuid::text, ',') dappq FROM sys_user_ho WHERE loai_congtrinh = 78 GROUP BY user_id) usd
                          ON us.mem_id = usd.user_id
                    LEFT JOIN (SELECT user_id, STRING_AGG(ho_uuid::text, ',') trambompq FROM sys_user_ho WHERE loai_congtrinh = 64 GROUP BY user_id) ustb
                          ON us.mem_id = ustb.user_id
                    LEFT JOIN (SELECT user_id, STRING_AGG(httn_uuid::text, ',') httnpq FROM sys_user_httn GROUP BY user_id) hh
                          ON us.mem_id = hh.user_id
                    WHERE mem_username = @username AND mem_password = @password";

                //if (hethong == "1")
                //{
                //    sql += " AND mem_quanlytaisan = true";
                //}

                using (var cmd = new NpgsqlCommand(sql, conn))
                {
                    cmd.Parameters.AddWithValue("username", username);
                    cmd.Parameters.AddWithValue("password", password);

                    using (var reader = await cmd.ExecuteReaderAsync())
                    {
                        if (reader.HasRows)
                        {
                            // Retrieve the data and return as a JSON object
                            await reader.ReadAsync();
                            var userDto = new LoginDto
                            {
                                UserId = reader["mem_id"].ToString(),
                                UserName = reader["mem_username"].ToString(),
                                // Gán các giá trị cần thiết khác
                            };
                            return userDto;
                        }
                    }
                }
            }
            return null;
        }

        // Validate username and return a JsonObject without password field
        public async Task<JsonObject> ValidateUserName(string username)
        {
            username = SanitizeInput(username);

            using (var conn = new NpgsqlConnection(_config.GetConnectionString("FrameworkNpgsql")))
            {
                await conn.OpenAsync();
                var sql = "SELECT * FROM sys_member WHERE mem_username = @username";

                using (var cmd = new NpgsqlCommand(sql, conn))
                {
                    cmd.Parameters.AddWithValue("username", username);

                    using (var reader = await cmd.ExecuteReaderAsync())
                    {
                        if (reader.HasRows)
                        {
                            JsonObject user = new JsonObject();
                            while (await reader.ReadAsync())
                            {
                                user.Add("mem_id", reader["mem_id"].ToString());
                                user.Add("mem_username", reader["mem_username"].ToString());
                            }
                            return user;
                        }
                    }
                }
            }
            return null;
        }

        // Generate JWT token for the user
        public string GenerateToken(JsonObject user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            // Lấy khóa từ cấu hình
            var key = _config["Jwt:Key"];

            // Kiểm tra nếu khóa là null hoặc rỗng
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentNullException("Jwt:Key", "JWT key is not configured properly.");
            }

            var keyBytes = Encoding.ASCII.GetBytes(key);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
            new Claim("userId", user["mem_id"].ToString()),
            new Claim("userName", user["mem_username"].ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        // Send reset password email
        public async Task SendResetPasswordEmail(string username, string tomail)
        {
            var message = new MimeMessage();

            message.From.Add(new MailboxAddress("Trung tâm công nghệ phần mềm thủy lợi", "thuyloivietnam@cwrs-au.vn"));
            message.To.Add(new MailboxAddress(username, tomail));  // Sửa lại tên người nhận và email

            message.Subject = "Cấp lại mật khẩu tài khoản";

            message.Body = new TextPart("html")
            {
                Text = $@"<h3>Xin chào : {username}</h3>
                  <p>Mật khẩu tài khoản của bạn là: <b>Mật khẩu mới</b></p>
                  <p>Bấm <a href=""http://taisan.thuyloivietnam.vn/login.html"">vào đây</a> để đăng nhập lại.</p>
                  <p>Trân trọng cảm ơn!</p>"
            };

            using (var client = new MailKit.Net.Smtp.SmtpClient())  // Sử dụng SmtpClient của MailKit
            {
                await client.ConnectAsync("smtp.gmail.com", 465, true);
                await client.AuthenticateAsync("thuyloivietnam@cwrs-au.vn", "dieukhien@2014");
                await client.SendAsync(message);
                await client.DisconnectAsync(true);
            }
        }


        // Helper function to sanitize user input
        private string SanitizeInput(string input)
        {
            return input.Replace("'", "").Replace(";", "").Replace("(", "").Replace(")", "").Replace(" ", "");
        }
    }

}
