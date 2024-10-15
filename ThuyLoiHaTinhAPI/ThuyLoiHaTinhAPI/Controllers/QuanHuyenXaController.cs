using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using ThuyLoiHaTinhAPI.Service;

namespace ThuyLoiHaTinhAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuanHuyenXaController : ControllerBase
    {
        private readonly QuanHuyenXaService _quanHuyenXaService;

        public QuanHuyenXaController(QuanHuyenXaService quanHuyenXaService)
        {
            _quanHuyenXaService = quanHuyenXaService;
        }
        [HttpGet("getAllProvinces")]
        public async Task<IActionResult> GetAllProvinces()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _quanHuyenXaService.GetAllProvinces();

                // Trả về kết quả
                return Ok(result);
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                return StatusCode(500, ex.Message);
            }
        }
    }
}
