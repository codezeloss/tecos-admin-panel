import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

// ** GET ALL ORDERS
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/orders`, config);
  return response.data;
};

const orderService = {
  getOrders,
};
export default orderService;
