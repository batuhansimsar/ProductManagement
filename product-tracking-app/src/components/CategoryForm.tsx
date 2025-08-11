import { useState } from "react";

const CategoryForm = ({ onAddCategory }: { onAddCategory: any }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim()) {
      onAddCategory(name.trim());
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Kategori adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit" style={{ marginLeft: 8 }}>
        Ekle
      </button>
    </form>
  );
};

export default CategoryForm;
