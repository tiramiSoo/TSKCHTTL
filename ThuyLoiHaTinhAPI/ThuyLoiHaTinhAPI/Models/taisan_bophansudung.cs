using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class taisan_bophansudung
    {
        public int id { get; set; }
        public int? bpsd_madonvi { get; set; }
        public string? bpsd_ma { get; set; }
        public string? bpsd_ten { get; set; }
        public string? bpsd_ghichu { get; set; }
        public int? bpsd_dvql_id { get; set; }
        public DateTime? created_at { get; set; }
        public string? created_by { get; set; }
        public DateTime? last_modified_at { get; set; }
        public string? last_modified_by { get; set; }
        public int? deleted_status { get; set; }

    }
}
