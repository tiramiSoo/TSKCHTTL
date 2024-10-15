using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThuyLoiHaTinhAPI.Models
{
    public class taisan_nguyengia
    {
        public int id { get; set; }
        public Guid? mahieu { get; set; }
        // Thuộc tính điều hướng (navigation property) đến taisan_congtrinh
        public taisan_congtrinh? TaiSanCongTrinh { get; set; }
        public int? nguonhinhthanh { get; set; }
        public double? giatri { get; set; }
        public DateTime? created_at { get; set; }
        public string? created_by { get; set; }
        public DateTime? last_modified_at { get; set; }
        public string? last_modified_by { get; set; }
        public int? deleted_status { get; set; }
        public int? loaigia { get; set; }
    }
}
