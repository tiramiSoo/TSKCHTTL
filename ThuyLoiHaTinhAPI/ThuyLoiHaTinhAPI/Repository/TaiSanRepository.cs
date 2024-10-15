using Dapper;
using ThuyLoiHaTinhAPI.Context;
using ThuyLoiHaTinhAPI.Models;
using System.Data;

namespace ThuyLoiHaTinhAPI.Repository
{
    public class TaiSanRepository : ITaiSanRepository
    {
        private readonly DapperContext db;
        public TaiSanRepository(DapperContext db)
        {
            this.db = db;
        }

        public Task<taisan_congtrinh> CreateQLTS(taisan_congtrinhRequest dep)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<taisan_congtrinh>> GetQLTS(int loaict, int loaict_id, int httn_id, int namtheodoi, int dvql_id, Guid nguoisd_uuid)
        {
            throw new NotImplementedException();
        }

        public Task<taisan_congtrinh> GetQLTSbyID(int id)
        {
            throw new NotImplementedException();
        }

        public Task<taisan_congtrinh> GetTaiSanWithUserId(int nguoisd_uuid)
        {
            throw new NotImplementedException();
        }

        public Task Update(int id, taisan_congtrinhRequest dep)
        {
            throw new NotImplementedException();
        }
    }
}
