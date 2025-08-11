using Products.DTO;

namespace Services
{
    public interface IProductService
    {
        ProductDto? GetProductById(int id);
        IEnumerable<ProductDto> GetAllProducts();
        ProductDto? AddProduct(ProductCreateDto dto);
        bool UpdateProduct(ProductUpdateDto dto);
        bool DeleteProduct(int id);
    }
}