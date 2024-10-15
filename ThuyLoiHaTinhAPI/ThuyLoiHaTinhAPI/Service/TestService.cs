//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Configuration;
//using Newtonsoft.Json.Linq;
//using Npgsql;
//using System;
//using System.Data;
//using System.Text;

//namespace YourNamespace.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class TaiSanController : ControllerBase
//    {
//        private readonly IConfiguration _configuration;

//        public TaiSanController(IConfiguration configuration)
//        {
//            _configuration = configuration;
//        }

//        [HttpPost("getTableQLTS-test")]
//        public IActionResult GetTableQLTS([FromBody] TableQLTSRequest request)
//        {
//            try
//            {
//                // Parse incoming data
//                var items = request.data;
//                int loaict = items!.loaict;
//                int loaict_id = items.loaict_id ?? 0;
//                int dvql_id = items!.dvql_id;
//                int httn_id = items.httn_id ?? 0;
//                int namtheodoi = items.namtheodoi;
//                int page = items.page;
//                int numberInPage = items.numberInPage;

//                // Begin building the SQL query
//                StringBuilder sql = new StringBuilder();
//                sql.AppendLine("WITH tsct AS (SELECT * FROM public.taisan_congtrinh WHERE deleted_status = 0");

//                // Add conditions based on the request data
//                if (loaict != 0)
//                    sql.AppendLine($" AND loaict = {loaict}");

//                if (loaict_id != 0)
//                    sql.AppendLine($" AND loaict_id = {loaict_id}");

//                if (httn_id != 0)
//                    sql.AppendLine($" AND httn_id = {httn_id}");

//                if (dvql_id != 0)
//                    sql.AppendLine($" AND dvql_id = {dvql_id}");

//                if (namtheodoi != 0)
//                {
//                    sql.AppendLine($" AND namtheodoi <= {namtheodoi}");
//                    sql.AppendLine($" AND mahieu NOT IN (SELECT DISTINCT bdg_mats FROM public.taisan_biendonggia WHERE deleted_status = 0 AND bdg_loai_chungtu IN (2, 7, 8) AND bdg_nam_chungtu <= {namtheodoi})");
//                }

//                sql.AppendLine(")");

//                // Add additional SQL CTE queries
//                sql.AppendLine(" , tsrow AS (SELECT ROW_NUMBER() OVER(ORDER BY ten ASC) AS rowi, * FROM tsct)");

//                // Add bdg query
//                sql.AppendLine(" , bdg AS (SELECT bdg_mats, bdg_nguyen_gia, bdg_hm_tyle, bdg_haomon_khauhao_luyke, bdg_giatri_conlai, bdg_ngay_chungtu, bdg_ma_chungtu, bdg_nam_chungtu, bdg_id_chungtu, bdg_loai_chungtu");
//                sql.AppendLine(" FROM (SELECT ROW_NUMBER() OVER (PARTITION BY bdg_mats ORDER BY bdg_ngay_chungtu DESC, bdg_id DESC) AS rowi, * FROM public.taisan_biendonggia WHERE deleted_status = 0");

//                if (namtheodoi != 0)
//                    sql.AppendLine($" AND bdg_nam_chungtu <= {namtheodoi}");

//                sql.AppendLine(" AND bdg_mats IN (SELECT mahieu FROM tsct)) tb WHERE rowi = 1)");

//                // Add dm query
//                sql.AppendLine(" , dm AS (SELECT qlts_rt_id, qlts_rt_name, qlts_rt_pid, qlts_rt_ref, qlts_rt_level, qlts_rt_index FROM public.iw_qlts_relations_tree WHERE deleted_status = 0)");

//                // Add bpsd query
//                sql.AppendLine(" , bpsd AS (SELECT id, bpsd_ten FROM public.taisan_bophansudung)");

//                // Add haomon query
//                sql.AppendLine(" , haomon AS (SELECT id, hm_ngaybatdau, hm_sonamsd, hm_tyle, hm_khauhaonam, hm_sonamsudungconlai, hm_ngayketthuc, hm_mataisan FROM public.taisan_haomon WHERE hm_mataisan IN (SELECT mahieu FROM tsct))");

//                // Add khauhao query
//                sql.AppendLine(" , khauhao AS (SELECT id, kh_mataisan, kh_ngaybatdau, kh_kytrich, kh_giatritrich, kh_sothangtrich, kh_sothangconlai, kh_khauhao, kh_luyke, kh_giatritrichconlai FROM public.taisan_khauhao WHERE kh_mataisan IN (SELECT mahieu FROM tsct))");

//                // Add tblng query
//                sql.AppendLine(" , tblng AS (SELECT mahieu, nguonhinhthanh, dm_ten AS nguonhinhthanh_ten, giatri, loaigia FROM public.taisan_nguyengia ng LEFT JOIN (SELECT id AS dm_id, tenphanloai AS dm_ten FROM public.tbl_danhmuc_taisan WHERE nhom_id = 9) dm ON dm.dm_id = ng.nguonhinhthanh WHERE ng.mahieu IN (SELECT mahieu FROM tsct))");

//                // Add nguyengia query
//                sql.AppendLine(" , nguyengia AS (SELECT '['||string_agg('{\"giatri\":\"'||coalesce(giatri::text,'')||'\",\"nguonhinhthanh\":\"'||coalesce(nguonhinhthanh::text,'')||'\",\"nguonhinhthanh_ten\":\"'||coalesce(nguonhinhthanh_ten::text,'')||'\",\"loaigia\":\"'||coalesce(loaigia::text,'')||'\"}',',')||']' AS nguonhinhthanh, mahieu FROM tblng GROUP BY mahieu)");

//                // Add tsgt query
//                sql.AppendLine(" , tsgt AS (SELECT DISTINCT true AS tudongghitang, bdg_mats FROM public.taisan_biendonggia WHERE bdg_loai_chungtu != 0 AND deleted_status = 0)");

//                // Add hm query
//                sql.AppendLine(" , hm AS (SELECT DISTINCT mahieu, true AS hasmap FROM public.taisan_congtrinh_diem UNION SELECT DISTINCT mahieu, true AS hasmap FROM public.taisan_congtrinh_duong)");

//                // Add cam query
//                sql.AppendLine(" , cam AS (SELECT DISTINCT 1 AS hascamera, taisan_uuid FROM public.taisan_camera WHERE deleted_status = 0 AND ispublic = true)");

//                // Final SQL selection
//                sql.AppendLine("SELECT tsall.*, bdg.*, hm.hasmap, hascamera, haomon.*, khauhao.*, nguyengia.*, dm_loaict.qlts_rt_name AS loaict_name, dm_loaict_id.qlts_rt_name AS loaict_id_name");
//                sql.AppendLine(", bpsd.bpsd_ten AS bophansd_name, CASE WHEN tsgt.tudongghitang = true THEN true ELSE false END AS tudongghitang FROM tsrow tsall");
//                sql.AppendLine("LEFT JOIN dm AS dm_loaict ON dm_loaict.qlts_rt_ref = tsall.loaict");
//                sql.AppendLine("LEFT JOIN dm AS dm_loaict_id ON dm_loaict_id.qlts_rt_ref = tsall.loaict_id");
//                sql.AppendLine("LEFT JOIN bpsd ON bpsd.id = tsall.bophansd_id");
//                sql.AppendLine("LEFT JOIN haomon ON haomon.hm_mataisan = tsall.mahieu");
//                sql.AppendLine("LEFT JOIN tsgt ON tsgt.bdg_mats = tsall.mahieu");
//                sql.AppendLine("LEFT JOIN bdg ON bdg.bdg_mats = tsall.mahieu");
//                sql.AppendLine("LEFT JOIN khauhao ON khauhao.kh_mataisan = tsall.mahieu");
//                sql.AppendLine("LEFT JOIN hm ON hm.mahieu = tsall.mahieu");
//                sql.AppendLine("LEFT JOIN cam ON cam.taisan_uuid = tsall.mahieu");
//                sql.AppendLine("LEFT JOIN nguyengia ON nguyengia.mahieu = tsall.mahieu");
//                sql.AppendLine("ORDER BY last_modified_at DESC, loaict, loaict_id, ten DESC");

//                // Connect to PostgreSQL and execute the SQL query
//                var connectionString = _configuration.GetConnectionString("FrameworkNpgsql");
//                using (NpgsqlConnection conn = new NpgsqlConnection(connectionString))
//                {
//                    conn.Open();

//                    NpgsqlCommand cmd = new NpgsqlCommand(sql.ToString(), conn);
//                    NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
//                    DataTable dt = new DataTable();
//                    da.Fill(dt);

//                    // Convert the DataTable to JSON and return it
//                    string jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(dt);
//                    return Ok(new { dtTableAll = JArray.Parse(jsonResult) });
//                }
//            }
//            catch (Exception ex)
//            {
//                // Handle any errors
//                return StatusCode(500, $"Lỗi hệ thống: {ex.Message}");
//            }
//        }
//    }
//}
