using Newtonsoft.Json.Linq;
using Npgsql;
using System;
using System.Data;
using System.Text;
using Microsoft.Extensions.Configuration;

//namespace ThuyLoiHaTinhAPI.Service
//{
//    public class GhiTangService
//    {
//        private readonly IConfiguration _configuration;

//        public GhiTangService(IConfiguration configuration) 
//        { 
//            _configuration = configuration;
//        }

//        public JArray GetListGhiTang(GhiTangRequest request)
//        {
//            var items = request.data;
//            int dvql_id = items!.dvql_id;
//            int nam = items!.nam;

//            // Begin building the SQL query
//            StringBuilder sql = new StringBuilder();

//            sql.AppendLine("SELECT * FROM taisan_ghitang");
//        }
//    }
//}
