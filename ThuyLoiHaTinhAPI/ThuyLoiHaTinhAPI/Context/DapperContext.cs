using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Data;


namespace ThuyLoiHaTinhAPI.Context
{
    public class DapperContext
    {
        private readonly IConfiguration configuration;
        private readonly string connectionString;

        public DapperContext(IConfiguration configuration)
        {
            this.configuration = configuration;
            connectionString = configuration.GetConnectionString("FrameworkNpgsql");
        }

        public IDbConnection CreateConnection() => new NpgsqlConnection(connectionString);
    }
}
