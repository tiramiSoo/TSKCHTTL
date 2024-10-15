using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class taisan_congtrinh
    {
        public Guid mahieu { get; set; }
        public int id { get; set; }
        public string? ten { get; set; }
        public string? ma_qhns { get; set; }
        public int? loaict { get; set; }
        public int? loaict_id { get; set; }
        public int? xa_id { get; set; }
        public int? huyen_id { get; set; }
        public int? tinh_id { get; set; }
        public int? httn_id { get; set; }
        public int? dvql_id { get; set; }

        // Thuộc tính điều hướng (navigation property) đến sys_coquan
        public sys_coquan? CoQuan { get; set; }
        public int? luuvucsong_id { get; set; }
        public string? nguon_goc { get; set; }
        public string? donvi_tinh { get; set; }
        public int? loai_taisan_id { get; set; }
        public int? nam_xaydung { get; set; }
        public int? nam_khaithac { get; set; }
        public int? nam_bangiao { get; set; }
        public double? dientich_dat { get; set; }
        public double? dientich_san { get; set; }
        public double? nguyen_gia { get; set; }
        public int? loai_nguyengia { get; set; }
        public double? giatri_conlai { get; set; }
        public bool? tinhtrang_taisan { get; set; }
        public int? song_id { get; set; }
        public int? loaits_khauhaohaomon { get; set; }
        public int? bophansd_id { get; set; }
        public double? haomon_khauhao_luyke { get; set; }
        public double? so_luong { get; set; }
        public int? bb_bangiao_tiepnhan { get; set; }
        public DateTime? ngay_khaithac { get; set; }
        public DateTime? ngay_ghitang { get; set; }
        public DateTime? ngay_batdausudung { get; set; }
        public Guid? nguoisd_uuid { get; set; }
        public string? created_by { get; set; }
        public DateTime? created_at { get; set; }
        public string? last_modified_by { get; set; }
        public DateTime? last_modified_at { get; set; }
        public int? deleted_status { get; set; }
        public int? namtheodoi { get; set; }
        public int? nhapkhauid { get; set; }
        public string? ghichu { get; set; }
        public string? hoso_taisan { get; set; }
        public int? thoihan_khaithac { get; set; }
        public int? phanloaict { get; set; }
        public int? loaigia { get; set; }
        public int? chieudai { get; set; }
        public int? capcongtrinh { get; set; }
        public ICollection<taisan_biendonggia>? TaiSanBDG { get; set; }
        public ICollection<taisan_nguyengia>? TaiSanNG { get; set; }
    }
}
