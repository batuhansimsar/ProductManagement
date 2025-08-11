import { useContext, useState } from "react";
import { AppContext } from "../store/AppContext";
import ProductList from "../components/ProductList";

const ProductListPage = () => {
  const { products, categories, updateProduct, deleteProduct } =
    useContext(AppContext);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [form, setForm] = useState<any>({});
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setForm(product);
    setShowModal(true);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((f: any) => ({
      ...f,
      [name]:
        name === "price" || name === "stockQuantity" || name === "categoryId"
          ? Number(value)
          : value,
    }));
  };

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (
      editingProduct &&
      form.productName &&
      form.price !== undefined &&
      form.categoryId
    ) {
      await updateProduct({ ...editingProduct, ...form });
      setShowModal(false);
      setEditingProduct(null); //bakılacak
    }
  };

  return (
    <div className="container">
      <h2>Ürünler</h2>
      <ProductList
        products={products}
        categories={categories}
        onEdit={handleEdit}
        onDelete={deleteProduct}
      />
      {showModal && editingProduct && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}>
          <form
            onSubmit={handleSave}
            style={{
              background: "#fff",
              padding: 32,
              borderRadius: 12,
              minWidth: 320,
              boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
            }}>
            <h3>Ürünü Düzenle</h3>
            <div style={{ marginBottom: 12 }}>
              <label>
                Adı:{" "}
                <input
                  name="productName"
                  value={form.productName || ""}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>
                Fiyat:{" "}
                <input
                  name="price"
                  type="number"
                  value={form.price ?? ""}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>
                Stok:{" "}
                <input
                  name="stockQuantity"
                  type="number"
                  value={form.stockQuantity ?? ""}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>
                Kategori:{" "}
                <select
                  name="categoryId"
                  value={form.categoryId ?? ""}
                  onChange={handleChange}
                  required>
                  <option value="">Seçiniz</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>
                Açıklama:{" "}
                <input
                  name="description"
                  value={form.description || ""}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>
                Resim URL:{" "}
                <input
                  name="imageUrl"
                  value={form.imageUrl || ""}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit">Kaydet</button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              style={{ marginLeft: 8 }}>
              İptal
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
