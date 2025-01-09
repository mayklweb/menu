import { Axios } from "./api";

export const getProducts = async () => {
  const res = await Axios.get("/products");
  return res.data;
};

export const getProductByCategory = async (id) => {
  const res = await Axios.get(`/products?categry_id=${id}`);
  return res.data;
};

export const getCategories = async () => {
  const { data } = await Axios.get("/categories");
  return data;
};

export const postOrder = async () => {
  const { data } = await Axios.get("/categories");
  return data;
};
