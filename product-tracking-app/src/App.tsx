import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductAddPage from "./pages/ProductAddPage";
import CategoryPage from "./pages/CategoryPage";
import { AppProvider } from "./store/AppContext";
import './App.css';
import { useState } from "react";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <AppProvider>
      <Router>
        <Navbar onShowProducts={() => setShowProducts(s => !s)} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/add-product" component={ProductAddPage} />
          <Route path="/categories" component={CategoryPage} />
        </Switch>
        {}
        <div style={{
          maxHeight: showProducts ? 2000 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.7s cubic-bezier(.4,2,.6,1)',
          marginTop: showProducts ? 32 : 0,
          opacity: showProducts ? 1 : 0,
          pointerEvents: showProducts ? 'auto' : 'none',
        }}>
          {showProducts && <ProductListPage />}
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;