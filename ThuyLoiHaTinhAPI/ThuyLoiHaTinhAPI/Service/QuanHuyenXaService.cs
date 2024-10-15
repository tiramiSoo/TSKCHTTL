using Newtonsoft.Json.Linq;
using Npgsql;
using System;
using System.Data;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace ThuyLoiHaTinhAPI.Service
{
    public class QuanHuyenXaService
    {
        private readonly IConfiguration _configuration;

        public QuanHuyenXaService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<JArray> GetAllProvinces()
        {
            try
            {
                // Tạo câu truy vấn
                StringBuilder sql = new StringBuilder();
                sql.AppendLine(" SELECT gid, ten_tinh FROM public.bgmap_province");

                // Kết nối với PostgreSQL và thực hiện truy vấn
                var connectionString = _configuration.GetConnectionString("FrameworkNpgsql");
                using (NpgsqlConnection conn = new NpgsqlConnection(connectionString))
                {
                    conn.Open();

                    NpgsqlCommand cmd = new NpgsqlCommand(sql.ToString(), conn);
                    NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
                    DataTable dt = new DataTable();
                    await Task.Run(() => da.Fill(dt));

                    // Chuyển đổi kết quả thành JSON và trả về
                    string jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(dt);
                    return JArray.Parse(jsonResult);
                }
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                throw new Exception($"Lỗi hệ thống: {ex.Message}");
            }
        }

        public async Task<JArray> GetDistrictsByProvince(int tinhId)
        {
            try
            {
                // Tạo câu truy vấn
                StringBuilder sql = new StringBuilder();
                sql.AppendLine(" SELECT gid, ten_tinh FROM public.bgmap_province");

                // Kết nối với PostgreSQL và thực hiện truy vấn
                var connectionString = _configuration.GetConnectionString("FrameworkNpgsql");
                using (NpgsqlConnection conn = new NpgsqlConnection(connectionString))
                {
                    conn.Open();

                    NpgsqlCommand cmd = new NpgsqlCommand(sql.ToString(), conn);
                    NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
                    DataTable dt = new DataTable();
                    await Task.Run(() => da.Fill(dt));

                    // Chuyển đổi kết quả thành JSON và trả về
                    string jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(dt);
                    return JArray.Parse(jsonResult);
                }
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                throw new Exception($"Lỗi hệ thống: {ex.Message}");
            }
        }
    }
}
