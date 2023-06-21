import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL BLOG CATEGORIES
const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blogCategory`);
  return response.data;
};

const blogCategoryService = {
  getBlogCategories,
};
export default blogCategoryService;
