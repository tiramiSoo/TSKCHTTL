//using ThuyLoiHaTinhAPI.Models.Domain;
//using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore;

//namespace ThuyLoiHaTinhAPI.Data
//{
//    public class DatabaseContext : IdentityDbContext
//    {
//        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
//        {
//        }
//        public DbSet<TaiSanCongTrinh> TaiSanCongTrinhs { get; set; }
//        public DbSet<TaiSanBienDongGia> TaiSanBienDongGias { get; set; }
//        public DbSet<SysDanhMuc> SysDanhMucs { get; set; }
//        public DbSet<TaiSanCongTrinhDiem> TaiSanCongTrinhDiems { get; set; }
//        public DbSet<TaiSanCongTrinhDuong> TaiSanCongTrinhDuongs { get; set; }
//        public DbSet<TaiSanCamera> TaiSanCameras { get; set; }
//        public DbSet<TaiSanHaoMon> TaiSanHaoMons { get; set; }
//        public DbSet<TaiSanKhauHao> TaiSanKhauHaos { get; set; }
//        public DbSet<TaiSanNguyenGia> TaiSanNguyenGias { get; set; }
//        public DbSet<IW_QLTS_RelationTree> IwQltsRelationsTrees { get; set; }
//        public DbSet<TBL_DanhMucTaiSan> DanhMucTaiSans { get; set; }
//    }
//}
