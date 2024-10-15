using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ThuyLoiHaTinhAPI.Context;
using ThuyLoiHaTinhAPI.Repository;
using ThuyLoiHaTinhAPI.Service;

var builder = WebApplication.CreateBuilder(args);

//Get connection string
var connectionString = builder.Configuration.GetConnectionString("FrameworkNpgsql");

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});


//Initializing database inside DI Container
//builder.Services.AddDbContext<DatabaseContext>(options
//    => options.UseNpgsql(connectionString));

//builder.Services.AddIdentityApiEndpoints<IdentityUser>()
//    .AddEntityFrameworkStores<DatabaseContext>();

// Add services to the container.

builder.Services.AddControllers()
                .AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Add Service
builder.Services.AddScoped<TaiSanService>();
builder.Services.AddScoped<DanhMucService>();
builder.Services.AddScoped<QuanHuyenXaService>();
builder.Services.AddScoped<ILoginService, LoginService>();

builder.Services.AddSingleton<DapperContext>();
builder.Services.AddScoped<ITaiSanRepository, TaiSanRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(options =>
{
    options.AllowAnyHeader();
    options.AllowAnyOrigin();
    options.AllowAnyMethod();
}
);

app.UseAuthorization();

app.MapControllers();

app.Run();
