using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class taisan_biendonggia
    {
        public int bdg_id { get; set; }
        public int bdg_mats { get; set; }
        // Thuộc tính điều hướng (navigation property) đến taisan_congtrinh
        public taisan_congtrinh? TaiSanCongTrinh { get; set; }
        public double? bdg_nguyen_gia { get; set; }
        public double? bdg_hm_tyle { get; set; }
        public double? bdg_haomon_khauhao_luyke { get; set; }
        public double? bdg_giatri_conlai { get; set; }
        public DateTime? bdg_ngay_chungtu { get; set; }
        public string? bdg_ma_chungtu { get; set; }
        public int? bdg_nam_chungtu { get; set; }
        public int? bdg_id_chungtu { get; set; }
        public int? bdg_loai_chungtu { get; set; }
        public DateTime? created_at { get; set; }
        public string? created_by { get; set; }
        public DateTime? last_modified_at { get; set; }
        public string? last_modified_by { get; set; }
        public int? deleted_status { get; set; }
    }
}
