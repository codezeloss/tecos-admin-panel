import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  return response.data;
};

const createProduct = async (product: any) => {
  const response = await axios.post(`${base_url}product/`, product, config);
  return response.data;
};

const updateProduct = async (product: any) => {
  const response = await axios.put(
    `${base_url}product/${product.id}`,
    {
      title: product.productData.title,
      description: product.productData.description,
      price: product.productData.price,
      brand: product.productData.brand,
      category: product.productData.category,
      tags: product.productData.tags,
      quantity: product.productData.quantity,
      color: product.productData.color,
      images: product.productData.images,
    },
    config
  );
  return response.data;
};

const getProduct = async (id: string) => {
  const response = await axios.get(`${base_url}product/${id}`, config);
  return response.data;
};

const deleteProduct = async (id: any) => {
  const response = await axios.delete(`${base_url}product/${id}`, config);
  return response.data;
};

const productService = {
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
};
export default productService;
