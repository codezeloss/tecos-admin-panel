import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category`);
  return response.data;
};

const createProductCategory = async (category: any) => {
  const response = await axios.post(`${base_url}category/`, category, config);
  return response.data;
};

const updateProductCategory = async (category: any) => {
  const response = await axios.put(
    `${base_url}category/${category.id}`,
    { title: category.productCategoryData.title },
    config
  );
  return response.data;
};

const getProductCategory = async (id: string) => {
  const response = await axios.get(`${base_url}category/${id}`, config);
  return response.data;
};

const deleteProductCategory = async (id: any) => {
  const response = await axios.delete(`${base_url}category/${id}`, config);
  return response.data;
};

const productCategoryService = {
  getProductCategories,
  createProductCategory,
  updateProductCategory,
  getProductCategory,
  deleteProductCategory,
};
export default productCategoryService;
