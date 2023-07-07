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

const updateBrand = async (brand: any) => {
  const response = await axios.put(
    `${base_url}brand/${brand.id}`,
    { title: brand.brandData.title },
    config
  );
  return response.data;
};

const getBrand = async (id: string) => {
  const response = await axios.get(`${base_url}brand/${id}`, config);
  return response.data;
};

const deleteBrand = async (id: any) => {
  const response = await axios.delete(`${base_url}brand/${id}`, config);
  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
  updateBrand,
  getBrand,
  deleteBrand,
};
export default brandService;
