import { createContext, useState, useEffect, ReactNode } from "react";
import { Product, Category } from "../types";
import * as api from "../api";

interface AppContextProps {
  products: Product[];
  categories: Category[];
  addProduct: (product: {
    productName: string;
    description: string;
    price: number;
    stockQuantity: number;
    imageUrl?: string;
    categoryId: number;
  }) => Promise<void>;
  addCategory: (name: string) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
}

export const AppContext = createContext<AppContextProps>({
  products: [],
  categories: [],
  addProduct: async () => {},
  addCategory: async () => {},
  deleteCategory: async () => {},
  updateProduct: async () => {},
  deleteProduct: async () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.getProducts().then(setProducts);
    api.getCategories().then(setCategories);
  }, []); // bakılacak

  const addProduct = async (product: {
    productName: string;
    description: string;
    price: number;
    stockQuantity: number;
    imageUrl?: string;
    categoryId: number;
  }) => {
    const newProduct = await api.addProduct(product);
    setProducts(prev => [...prev, newProduct]);
  };

  const addCategory = async (name: string) => {
    const newCategory = await api.addCategory(name);
    setCategories(prev => [...prev, newCategory]);
  };

  const deleteCategory = async (id: number) => {
    await api.deleteCategory(id);
    setCategories(prev => prev.filter(cat => cat.id !== id));
  };
  
  const updateProduct = async (product: Product) => {
    const updated = await api.updateProduct(product);
    setProducts(prev => prev.map(p => p.id === product.id ? (updated || product) : p));
  };

  const deleteProduct = async (id: number) => {
    await api.deleteProduct(id);
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <AppContext.Provider value={{
      products,
      categories,
      addProduct,
      addCategory,
      deleteCategory,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </AppContext.Provider>
  );
};