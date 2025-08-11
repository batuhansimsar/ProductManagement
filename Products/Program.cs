using Microsoft.EntityFrameworkCore;
using Products.Data;
using FluentValidation;
using FluentValidation.AspNetCore;
using Products.DTO; // Doğru şekilde eklenmeli
using Microsoft.AspNetCore.Builder; // Eklendi
using Microsoft.AspNetCore.Hosting; // Eklendi
using Microsoft.Extensions.DependencyInjection; // Eklendi
using Microsoft.Extensions.Configuration; // Eklendi (GetConnectionString için gerekli)
using Swashbuckle.AspNetCore.SwaggerGen; // SwaggerGen için gerekli
using Microsoft.Extensions.Hosting; // IsDevelopment için gerekli
using Microsoft.AspNetCore.Http; // WriteAsync için gerekli

var builder = WebApplication.CreateBuilder(args);

// 🔧 Veritabanı bağlantısı
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
    options.EnableSensitiveDataLogging(); // Geliştirme ortamı için faydalı
});

// 🔧 Controller ve Swagger servisleri
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 🔧 CORS (Frontend bağlantısı için gerekli)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddAutoMapper(typeof(Mapping.MappingProfile));
builder.Services.AddScoped<Services.IProductService, Services.ProductService>();
builder.Services.AddScoped<Services.ICategoryService, Services.CategoryService>();
builder.Services.AddFluentValidationAutoValidation();
// Replace 'ProductCreateDtoValidator' with an existing validator class, e.g. 'ProductCreateDto'
builder.Services.AddValidatorsFromAssemblyContaining<ProductCreateDto>(); // Namespace zaten using ile eklendi

var app = builder.Build();

// 🔧 Swagger sadece geliştirme ortamında açık
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 💡 HTTPS yönlendirme
app.UseHttpsRedirection();

// 🔓 CORS aktif et
app.UseCors();

// 🔐 Yetkilendirme (Gerekirse)
app.UseAuthorization();

// 🎯 Controller'ları API ile eşle
app.MapControllers();

app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";
        var error = context.Features.Get<Microsoft.AspNetCore.Diagnostics.IExceptionHandlerFeature>();
        if (error != null)
        {
            var result = System.Text.Json.JsonSerializer.Serialize(new { message = "Beklenmeyen bir hata oluştu.", detail = error.Error.Message });
            await context.Response.WriteAsync(result);
        }
    });
});

// 🚀 Uygulamayı başlat
app.Run();