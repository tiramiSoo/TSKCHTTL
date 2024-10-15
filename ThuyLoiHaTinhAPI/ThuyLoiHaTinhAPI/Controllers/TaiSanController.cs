using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using ThuyLoiHaTinhAPI.Service;

namespace ThuyLoiHaTinhAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaiSanController : ControllerBase
    {
        private readonly TaiSanService _taiSanService;

        public TaiSanController(TaiSanService taiSanService)
        {
            _taiSanService = taiSanService;
        }

        [HttpPost("getTableQLTS")]
        public async Task<IActionResult> GetTableQLTS([FromBody] TableQLTSRequest request)
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _taiSanService.GetTableQLTS(request);

                // Trả về kết quả
                return Ok(new { dtTableAll = result });
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("getFilterLoaiCT")]
        public async Task<IActionResult> GetFilterLoaiCT()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _taiSanService.GetFilterLoaiCT();

                // Trả về kết quả
                return Ok(result);
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("getFilterCT")]
        public async Task<IActionResult> GetFilterCT()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _taiSanService.GetFilterCT();

                // Trả về kết quả
                return Ok(result);
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("getFilterCapCT")]
        public async Task<IActionResult> GetFilterCapCT()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _taiSanService.GetFilterCapCT();

                // Trả về kết quả
                return Ok(result);
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("getFilterLoaiTaiSan")]
        public async Task<IActionResult> GetFilterLoaiTaiSan()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _taiSanService.GetFilterLoaiTaiSan();

                // Trả về kết quả
                return Ok(result);
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("getFilterHTTN")]
        public async Task<IActionResult> GetFilterHTTN()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _taiSanService.GetFilterHTTN();

                // Trả về kết quả
                return Ok(result);
            }
            catch (Exception ex)
            {
                // Xử lý lỗi
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("getFilterLocation")]
        public async Task<IActionResult> GetFilterLocation()
        {
            try
            {
                // Gọi service để thực hiện truy vấn
                JArray result = await _taiSanService.GetFilterLocation();

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

