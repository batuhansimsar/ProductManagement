using Products.DTO;

namespace Services
{
    public interface ICategoryService
    {
        IEnumerable<CategoryDto> GetAllCategories();
        CategoryDto? GetCategoryById(int id);
        CategoryDto AddCategory(CategoryCreateDto categoryDto);
        void UpdateCategory(CategoryUpdateDto categoryDto);
        void DeleteCategory(int id);
    }
} 