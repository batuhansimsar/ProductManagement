import { Link } from "react-router-dom";

const Navbar = ({ onShowProducts }: { onShowProducts: any }) => {
  return (
    <nav>
      <Link to="/">Anasayfa</Link>
      <Link to="/add-product">Ürün Ekle</Link>
      <Link to="/categories">Kategoriler</Link>
      <button onClick={onShowProducts}>Ürünleri Göster</button>
    </nav>
  );
};

export default Navbar;
