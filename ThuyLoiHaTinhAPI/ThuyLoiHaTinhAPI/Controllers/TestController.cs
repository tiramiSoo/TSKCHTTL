//using Microsoft.AspNetCore.Mvc;
//using Newtonsoft.Json.Linq;
//using System.Collections.Generic;
//using System.Threading.Tasks;
//using ThuyLoiHaTinhAPI.Service;

//namespace ThuyLoiHaTinhAPI.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class TaiSanController : ControllerBase
//    {
//        private readonly TaiSanService _taiSanService;

//        public TaiSanController(TaiSanService taiSanService)
//        {
//            _taiSanService = taiSanService;
//        }

//        [HttpPost("getTableQLTS")]
//        public IActionResult GetTableQLTS([FromBody] TableQLTSRequest request)
//        {
//            try
//            {
//                // Gọi service để thực hiện truy vấn
//                JArray result = _taiSanService.GetTableQLTS(request);

//                // Trả về kết quả
//                return Ok(new { dtTableAll = result });
//            }
//            catch (Exception ex)
//            {
//                // Xử lý lỗi
//                return StatusCode(500, ex.Message);
//            }
//        }
//    }
//}

