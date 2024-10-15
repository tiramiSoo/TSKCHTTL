using System.Text.Json.Nodes;
using ThuyLoiHaTinhAPI.Dto;
using ThuyLoiHaTinhAPI.Models;

public interface ILoginService
{
    Task<LoginDto> ValidateUser(string username, string password);
    Task<JsonObject> ValidateUserName(string username);
    Task SendResetPasswordEmail(string username, string tomail);
    string GenerateToken(JsonObject user);
}
