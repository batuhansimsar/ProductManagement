import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

const CategoryPage = () => {
  const { categories, addCategory, deleteCategory } = useContext(AppContext);

  return (
    <div className="container">
      <h2>Kategoriler</h2>
      <CategoryForm onAddCategory={addCategory} />
      <CategoryList categories={categories} onDeleteCategory={deleteCategory} />
    </div>
  );
};

export default CategoryPage;