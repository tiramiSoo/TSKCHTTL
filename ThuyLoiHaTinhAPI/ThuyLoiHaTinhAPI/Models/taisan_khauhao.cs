using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class taisan_khauhao
    {
        public int id { get; set; }
        public Guid? kh_mataisan { get; set; }
        public DateTime? kh_ngaybatdau { get; set; }
        public int? kh_kytrich { get; set; }
        public double? kh_giatritrich { get; set; }
        public int? kh_sothangtrich { get; set; }
        public int? kh_sothangconlai { get; set; }
        public double? kh_khauhao { get; set; }
        public double? kh_luyke { get; set; }
        public double? kh_giatritrichconlai { get; set; }

    }
}
