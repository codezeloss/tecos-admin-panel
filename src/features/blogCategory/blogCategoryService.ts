import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blogCategory/`);
  return response.data;
};

const createBlogCategory = async (blogCategory: any) => {
  const response = await axios.post(
    `${base_url}blogCategory/`,
    blogCategory,
    config
  );
  return response.data;
};

const blogCategoryService = {
  getBlogCategories,
  createBlogCategory,
};
export default blogCategoryService;
