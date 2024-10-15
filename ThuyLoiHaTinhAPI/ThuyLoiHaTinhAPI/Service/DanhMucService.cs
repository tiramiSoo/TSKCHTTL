using Newtonsoft.Json.Linq;
using Npgsql;
using System;
using System.Data;
using System.Text;
using Microsoft.Extensions.Configuration;


namespace ThuyLoiHaTinhAPI.Service
{
    public class DanhMucService
    {
        private readonly IConfiguration _configuration;

        public DanhMucService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<JArray> GetListDanhMuc()
        {
            try
            {
                StringBuilder sql = new StringBuilder();
                sql.AppendLine(" SELECT * FROM public.sys_danhmuc where dm_ldm_id = 126 ");
                sql.AppendLine(" ORDER BY dm_ten ");

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

        public async Task<JArray> GetListKhauHao()
        {
            try
            {
                StringBuilder sql = new StringBuilder();
                sql.AppendLine(" SELECT a.id,a.tencongtrinh,a.thoihansudung,a.tylehaomon,a.id_loaicongtrinh, b.dm_ten from taisan_tinhhaomon_tt75 a LEFT OUTER JOIN (SELECT dm_id, dm_ten FROM sys_danhmuc WHERE dm_ldm_id = 22) b ON a.id_loaicongtrinh = b.dm_id ");
                sql.AppendLine(" ORDER BY id_loaicongtrinh asc, id desc ");

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
