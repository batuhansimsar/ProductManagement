using Products.DTO;
using Products.Models;
using Products.Data;
using AutoMapper;

namespace Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public CategoryService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<CategoryDto> GetAllCategories()
        {
            var categories = _context.Categories.ToList();
            return _mapper.Map<List<CategoryDto>>(categories);
        }

        public CategoryDto? GetCategoryById(int id)
        {
            var category = _context.Categories.FirstOrDefault(c => c.Id == id);
            return category == null ? null : _mapper.Map<CategoryDto>(category);
        }

        public CategoryDto AddCategory(CategoryCreateDto categoryDto)
        {
            var category = _mapper.Map<Category>(categoryDto);
            _context.Categories.Add(category);
            _context.SaveChanges();
            return _mapper.Map<CategoryDto>(category);
        }

        public void UpdateCategory(CategoryUpdateDto categoryDto)
        {
            var category = _context.Categories.Find(categoryDto.Id);
            if (category != null)
            {
                _mapper.Map(categoryDto, category);
                _context.SaveChanges();
            }
        }

        public void DeleteCategory(int id)
        {
            var category = _context.Categories.Find(id);
            if (category != null)
            {
                _context.Categories.Remove(category);
                _context.SaveChanges();
            }
        }
    }
} 