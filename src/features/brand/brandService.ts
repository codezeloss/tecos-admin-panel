import axios from "axios";
import { base_url } from "../../utils/base_url.ts";
import { config } from "../../utils/axios_config.ts";

const getBrands = async () => {
  const response = await axios.get(`${base_url}brand/`);
  return response.data;
};

const createBrand = async (brand: any) => {
  const response = await axios.post(`${base_url}brand/`, brand, config);
  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
};
export default brandService;
