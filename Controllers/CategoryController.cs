using Microsoft.AspNetCore.Mvc;
using Products.DTO;
using Services;

namespace Products.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("{id}")] 
        public ActionResult<CategoryDto> GetCategory(int id)
        {
            var category = _categoryService.GetCategoryById(id);
            if (category == null)
                return NotFound();
            return Ok(category);
        }

        [HttpGet]
        public ActionResult<IEnumerable<CategoryDto>> GetCategories()
        {
            var categories = _categoryService.GetAllCategories();
            return Ok(categories);
        }

        [HttpPost]
        public ActionResult<CategoryDto> CreateCategory([FromBody] CategoryCreateDto newCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var created = _categoryService.AddCategory(newCategory);
            return CreatedAtAction(nameof(GetCategory), new { id = created.Id }, created);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(int id)
        {
            _categoryService.DeleteCategory(id);
            return NoContent();
        }
    }
}

