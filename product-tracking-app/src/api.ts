import axios from "axios";

export const deleteProduct = async (id: any) => {
  await axios.delete(`${BASE_URL}/Product/${id}`);
};



const BASE_URL = "http://localhost:5145/api";

export const updateProduct = async (product: any) => {

  const dto = {
    id: product.id,
    productName: product.productName,
    description: product.description,
    price: product.price,
    stockQuantity: product.stockQuantity,
    imageUrl: product.imageUrl,
    categoryId: product.categoryId,
  };
  const res = await axios.put(`${BASE_URL}/Product/${product.id}`, dto);
  return res.data;
};

export const getProducts = async () => {
  const res = await axios.get(`${BASE_URL}/Product`);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/Category`);
  return res.data;
};

export const addProduct = async (product: any) => {
  const res = await axios.post(`${BASE_URL}/Product`, product);
  return res.data;
};

export const addCategory = async (name: any) => {
  const res = await axios.post(`${BASE_URL}/Category`, { name });
  return res.data;
};

export const deleteCategory = async (id: any) => {
  await axios.delete(`${BASE_URL}/Category/${id}`);
};
