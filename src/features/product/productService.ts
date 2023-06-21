import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL PRODUCTS
const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);
  return response.data;
};

const productService = {
  getProducts,
};
export default productService;
