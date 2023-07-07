import axios from "axios";
import { base_url } from "../../utils/base_url.ts";
import { config } from "../../utils/axios_config.ts";

const getColors = async () => {
  const response = await axios.get(`${base_url}color/`);
  return response.data;
};

const createColor = async (color: any) => {
  const response = await axios.post(`${base_url}color/`, color, config);
  return response.data;
};

const updateColor = async (color: any) => {
  const response = await axios.put(
    `${base_url}color/${color.id}`,
    { title: color.colorData.title },
    config
  );
  return response.data;
};

const getColor = async (id: string) => {
  const response = await axios.get(`${base_url}color/${id}`, config);
  return response.data;
};

const deleteColor = async (id: any) => {
  const response = await axios.delete(`${base_url}color/${id}`, config);
  return response.data;
};

const colorService = {
  getColors,
  createColor,
  updateColor,
  getColor,
  deleteColor,
};
export default colorService;
