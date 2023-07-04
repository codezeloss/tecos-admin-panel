import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

const getColors = async () => {
  const response = await axios.get(`${base_url}color/`);
  return response.data;
};

const createColor = async (color: any) => {
  const response = await axios.post(`${base_url}color/`, color, config);
  return response.data;
};

const colorService = {
  getColors,
  createColor,
};
export default colorService;
