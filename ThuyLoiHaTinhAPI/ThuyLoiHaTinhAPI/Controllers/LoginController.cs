using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Text.Json.Nodes;
using ThuyLoiHaTinhAPI.Models;

namespace ThuyLoiHaTinhAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        // POST: api/login/validate
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(LoginRequest loginRequest)
        {
            var user = await _loginService.ValidateUser(loginRequest.Username, loginRequest.Password);
            if (user == null)
            {
                return Unauthorized("Invalid credentials.");
            }

            // Generate JWT token for the validated user
            string token = _loginService.GenerateToken(user);
            return Ok(new { user, token });
        }

        [HttpPost("checktaikhoan")]
        public async Task<IActionResult> CheckTaiKhoan([FromBody] LoginRequest loginRequest)
        {
            var user = await _loginService.ValidateUserName(loginRequest.Username);
            if (user == null)
            {
                return Unauthorized("Tên đăng nhập không tồn tại.");
            }

            return Ok(user);
        }

        // POST: api/login/send-reset-password
        [HttpPost("send-reset-password")]
        public async Task<IActionResult> SendResetPasswordEmail([FromBody] JsonObject request)
        {
            string username = request["username"].ToString();
            string email = request["email"].ToString();

            await _loginService.SendResetPasswordEmail(username, email);

            return Ok("Reset password email sent.");
        }
    }
}
