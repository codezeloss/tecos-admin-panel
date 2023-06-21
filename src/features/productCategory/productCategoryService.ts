import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL PRODUCT CATEGORIES
const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category`);
  return response.data;
};

const productCategoryService = {
  getProductCategories,
};
export default productCategoryService;
