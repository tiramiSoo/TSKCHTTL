using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class iw_qlts_relations_tree
    {
        public int qlts_rt_id { get; set; }
        public string? qlts_rt_name { get; set; }
        public int? qlts_rt_pid { get; set; }
        public int? qlts_rt_ref { get; set; }
        public int? qlts_rt_level { get; set; }
        public int? qlts_rt_index { get; set; }
        public int? deleted_status { get; set; }
    }
}
