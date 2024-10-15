using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using ThuyLoiHaTinhAPI.Service;

namespace ThuyLoiHaTinhAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DanhMucController : ControllerBase
    {
        private readonly DanhMucService _danhMucService;

        public DanhMucController(DanhMucService danhMucService)
        {
            _danhMucService = danhMucService;
        }

        [HttpGet("getListDanhMuc")]
        public async Task<IActionResult> GetListDanhMuc()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _danhMucService.GetListDanhMuc();

                // Trả về kết quả
                return Ok(result);
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("getListKhauHao")]
        public async Task<IActionResult> GetListKhauHao()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _danhMucService.GetListKhauHao();

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
