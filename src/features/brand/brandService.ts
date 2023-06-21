import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL BRANDS
const getBrands = async () => {
  const response = await axios.get(`${base_url}brand`);
  return response.data;
};

const brandService = {
  getBrands,
};
export default brandService;
