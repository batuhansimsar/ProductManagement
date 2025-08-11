import { useState, useContext } from "react";
import { AppContext } from "../store/AppContext";

const ProductAddPage = () => {
  const { categories, addProduct } = useContext(AppContext);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<string>("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState<number>(categories[0]?.id || 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProduct({
      productName,
      description,
      price: Number(price),
      stockQuantity: Number(stockQuantity),
      imageUrl,
      categoryId
    });
    setProductName("");
    setDescription("");
    setPrice("");
    setStockQuantity("");
    setImageUrl("");
    setCategoryId(categories[0]?.id || 0);
    alert("Ürün eklendi!");
  };

  return (
    <div className="container" style={{ maxWidth: 500, margin: "40px auto", background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: 32 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2d3748" }}>Ürün Ekle</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 18 }}>
        <input
          className="input"
          style={{ padding: "12px 16px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 16 }}
          placeholder="Ürün adı"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          required
        />
        <textarea
          className="input"
          style={{ padding: "12px 16px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 16, minHeight: 60 }}
          placeholder="Açıklama"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <label style={{ fontWeight: 500, marginBottom: 4 }}>Fiyat (₺)</label>
        <input
          className="input"
          type="number"
          style={{ padding: "12px 16px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 16 }}
          placeholder="Ürünün fiyatı (₺)"
          value={price}
          onChange={e => setPrice(e.target.value.replace(/^0+(?=\d)/, ""))}
          required
        />
        <label style={{ fontWeight: 500, marginBottom: 4 }}>Stok Miktarı (Adet)</label>
        <input
          className="input"
          type="number"
          style={{ padding: "12px 16px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 16 }}
          placeholder="Stok adedi"
          value={stockQuantity}
          onChange={e => setStockQuantity(e.target.value.replace(/^0+(?=\d)/, ""))}
          required
        />
        <select
          className="input"
          style={{ padding: "12px 16px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 16 }}
          value={categoryId}
          onChange={e => setCategoryId(Number(e.target.value))}
          required
        >
          <option value="" disabled>Kategori seçiniz</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <input
          className="input"
          style={{ padding: "12px 16px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 16 }}
          placeholder="Resim URL (isteğe bağlı)"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
        <button type="submit" style={{ background: "#3182ce", color: "#fff", border: "none", borderRadius: 8, padding: "14px 0", fontSize: 18, fontWeight: 600, cursor: "pointer", marginTop: 8, boxShadow: "0 2px 8px rgba(49,130,206,0.08)" }}>Ekle</button>
      </form>
    </div>
  );
};

export default ProductAddPage;