using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class tbl_danhmuc_taisan
    {
        public int id { get; set; }
        public string? tennhom { get; set; }
        public string? tenphanloai { get; set; }
        public int? nhom_id { get; set; }
        public int? sapxep { get; set; }
        public string? giatri { get; set; }
        public int? madongbo_csdlbotaichinh { get; set; }
        public string? dmts_donvitinh { get; set; }
    }
}
