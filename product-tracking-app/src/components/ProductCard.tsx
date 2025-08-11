const ProductCard = ({ product, category, onEdit, onDelete }: { product: any; category: any; onEdit: any; onDelete: any }) => {
  return (
    <div className="product-card">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.productName}
          style={{
            width: "100%",
            maxHeight: 120,
            objectFit: "cover",
            marginBottom: 8,
          }}
        />
      )}
      <h3>{product.productName}</h3>
      <p style={{ color: "#555", fontStyle: "italic", marginBottom: 8 }}>
        {product.description}
      </p>
      <p>Fiyat: {product.price} TL</p>
      <p>Stok: {product.stockQuantity}</p>
      <p>Kategori: {category?.name || "Bilinmiyor"}</p>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button onClick={() => onEdit(product)}>Düzenle</button>
        <button
          onClick={() => onDelete(product.id)}
          style={{ background: "#e53e3e", color: "#fff" }}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
