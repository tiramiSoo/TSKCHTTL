using Org.BouncyCastle.Asn1.Mozilla;
using ThuyLoiHaTinhAPI.Models;

namespace ThuyLoiHaTinhAPI.Repository
{
    public interface IGenericRepository<TRespone, TRequest, Key>
    {
        Task<IEnumerable<TRespone>> GetQLTS(int loaict, int loaict_id, int httn_id, int namtheodoi, int dvql_id, Guid nguoisd_uuid);
        Task<TRespone> GetQLTSbyID(Key id);
        Task<TRespone> CreateQLTS(TRequest dep);
        Task Update(Key id, TRequest dep);
        Task Delete(Key id);
    }
 }
