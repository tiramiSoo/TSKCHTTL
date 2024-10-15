using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class taisan_haomon
    {
        public int id { get; set; }
        public DateTime? hm_ngaybatdau { get; set; }
        public int? hm_sonamsd { get; set; }
        public double? hm_tyle { get; set; }
        public double? hm_khauhaonam { get; set; }
        public int? hm_sonamsudungconlai { get; set; }
        public DateTime? hm_ngayketthuc { get; set; }
        public Guid? hm_mataisan { get; set; }
    }
}
