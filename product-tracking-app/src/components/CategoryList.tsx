const CategoryList = ({ categories, onDeleteCategory }: { categories: any; onDeleteCategory: any }) => (
  <ul>
    {categories.map((cat: any) => (
      <li key={cat.id} style={{ marginBottom: 8 }}>
        {cat.name}
        <button
          onClick={() => onDeleteCategory(cat.id)}
          style={{ marginLeft: 8 }}>
          Sil
        </button>
      </li>
    ))}
  </ul>
);

export default CategoryList;
