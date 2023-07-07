import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`);
  return response.data;
};

const createBlog = async (blog: any) => {
  const response = await axios.post(`${base_url}blog/`, blog, config);
  return response.data;
};

const updateBlog = async (blog: any) => {
  const response = await axios.put(
    `${base_url}blog/${blog.id}`,
    {
      title: blog.blogsData.title,
      description: blog.blogsData.description,
      category: blog.blogsData.category,
      images: blog.blogsData.images,
    },
    config
  );
  return response.data;
};

const getBlog = async (id: string) => {
  const response = await axios.get(`${base_url}blog/${id}`, config);
  return response.data;
};

const deleteBlog = async (id: any) => {
  const response = await axios.delete(`${base_url}blog/${id}`, config);
  return response.data;
};

const blogService = {
  getBlogs,
  createBlog,
  updateBlog,
  getBlog,
  deleteBlog,
};
export default blogService;
