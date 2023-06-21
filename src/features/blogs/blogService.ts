import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL BLOGS
const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog`);
  return response.data;
};

const blogService = {
  getBlogs,
};
export default blogService;
