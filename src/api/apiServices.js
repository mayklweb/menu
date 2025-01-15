import { useMutation } from "react-query";
import { Axios } from "./api";

export const getProducts = async () => {
  const { data } = await Axios.get("/products/");
  return data.results;
};

export const getProductByCategory = async (id) => {
  const res = await Axios.get(`/products?categry_id=${id}`);
  return res.data;
};

export const getCategories = async () => {
  const { data } = await Axios.get("/Category");
  return data.results;
};

export const ostOrder = async () => {
  const { data } = await Axios.post("/save-order");
  return data;
};

export const postOrder = () => {
  return useMutation(async (data) => {
    const response = await Axios.post("/save-order", data);
    return response.data;
  });
};
