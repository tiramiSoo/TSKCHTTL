using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class sys_coquan
    {
        public int cq_id { get; set; }
        public string? cq_ten { get; set; }
        public string? cq_mota { get; set; }
        public string? cq_diachi { get; set; }
        public string? cq_nguoidaidien { get; set; }
        public string? cq_dienthoai { get; set; }
        public string? cq_email { get; set; }
        public string? cq_ghichu { get; set; }
        public bool? cq_active { get; set; }
        public int? cq_pid { get; set; }
        public int? cq_stt { get; set; }
        public string? cq_loai { get; set; }
        public int? cq_tinhid { get; set; }
        public bool? cq_quanlytaisan { get; set; }
        public string? cq_maqhns { get; set; }
        public string? cq_madvcs { get; set; }
        public int? unitlevelid { get; set; }
        public int? administrativelevel { get; set; }
        public int? functionalunittype { get; set; }
        public int? ma_dongbo { get; set; }
        public int? cq_hethong { get; set; }
        public Guid cq_uuid { get; set; }
        // Thuộc tính điều hướng thể hiện các tài sản thuộc cơ quan này
        public ICollection<taisan_congtrinh>? TaiSanCongTrinh { get; set; }
    }
}
