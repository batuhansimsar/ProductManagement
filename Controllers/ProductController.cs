using Microsoft.AspNetCore.Mvc;
using Products.DTO;
using Services;

namespace Products.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("{id}")]
        public ActionResult<ProductDto> GetProduct(int id)
        {
            var product = _productService.GetProductById(id);
            if (product == null)
                return NotFound(new { message = "Product not found." });
            return Ok(product);
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductDto>> GetProducts()
        {
            var products = _productService.GetAllProducts();
            return Ok(products);
        }

        [HttpPost]
        public ActionResult<ProductDto> CreateProduct([FromBody] ProductCreateDto newProduct)
        {
            var created = _productService.AddProduct(newProduct);
            if (created == null)
                return BadRequest(new { message = "Product could not be created." });
            return CreatedAtAction(nameof(GetProduct), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, [FromBody] ProductUpdateDto updatedProduct)
        {
            if (id != updatedProduct.Id)
                return BadRequest(new { message = "ID in URL does not match the product ID." });

            bool exists = _productService.GetProductById(updatedProduct.Id) != null;
            if (!exists)
                return NotFound(new { message = "Product not found." });

            _productService.UpdateProduct(updatedProduct);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _productService.GetProductById(id);
            if (product == null)
                return NotFound(new { message = "Product not found." });

            _productService.DeleteProduct(id);
            return NoContent();
        }
    }
}