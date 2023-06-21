import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL PRODUCT COLORS
const getProductColors = async () => {
  const response = await axios.get(`${base_url}color`);
  return response.data;
};

const productColorService = {
  getProductColors,
};
export default productColorService;
