using Products.DTO;
using Products.Models;
using Products.Data;
using AutoMapper;

namespace Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public ProductService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public ProductDto? GetProductById(int id)
        {
            var product = _context.Products.Find(id);
            return product == null ? null : _mapper.Map<ProductDto>(product);
        }

        public IEnumerable<ProductDto> GetAllProducts()
        {
            var products = _context.Products.ToList();
            return _mapper.Map<List<ProductDto>>(products);
        }

        public ProductDto? AddProduct(ProductCreateDto dto)
        {
            var product = _mapper.Map<Product>(dto);
            _context.Products.Add(product);
            _context.SaveChanges();
            return _mapper.Map<ProductDto>(product);
        }

        public bool UpdateProduct(ProductUpdateDto dto)
        {
            var product = _context.Products.Find(dto.Id);
            if (product == null) return false;
            _mapper.Map(dto, product);
            _context.SaveChanges();
            return true;
        }

        public bool DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null) return false;
            _context.Products.Remove(product);
            _context.SaveChanges();
            return true;
        }
    }
}