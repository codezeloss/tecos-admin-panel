import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL COLORS
const getColors = async () => {
  const response = await axios.get(`${base_url}color`);
  return response.data;
};

const colorService = {
  getColors,
};
export default colorService;
