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

const updateBlogCategory = async (blogCategory: any) => {
  const response = await axios.put(
    `${base_url}blogCategory/${blogCategory.id}`,
    { title: blogCategory.blogCategoryData.title },
    config
  );
  return response.data;
};

const getBlogCategory = async (id: string) => {
  const response = await axios.get(`${base_url}blogCategory/${id}`, config);
  return response.data;
};

const deleteBlogCategory = async (id: any) => {
  const response = await axios.delete(`${base_url}blogCategory/${id}`, config);
  return response.data;
};

const blogCategoryService = {
  getBlogCategories,
  createBlogCategory,
  updateBlogCategory,
  getBlogCategory,
  deleteBlogCategory,
};
export default blogCategoryService;
