import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  return response.data;
};

const createProducts = async (product: any) => {
  const response = await axios.post(`${base_url}product/`, product, config);
  return response.data;
};

const productService = {
  getProducts,
  createProducts,
};
export default productService;
