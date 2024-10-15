using ThuyLoiHaTinhAPI.Models;

namespace ThuyLoiHaTinhAPI.Repository
{
    public interface ITaiSanRepository : IGenericRepository<taisan_congtrinh, taisan_congtrinhRequest, int>
    {
        Task<taisan_congtrinh> GetTaiSanWithUserId(int nguoisd_uuid);
    }
}
