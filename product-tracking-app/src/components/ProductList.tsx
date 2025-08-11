import ProductCard from "./ProductCard";

const ProductList = ({ products, categories, onEdit, onDelete }: { products: any; categories: any; onEdit: any; onDelete: any }) => (
  <div className="product-list">
    {products.map((product: any) => (
      <ProductCard
        key={product.id}
        product={product}
        category={categories.find((c: any) => c.id === product.categoryId)}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default ProductList;
