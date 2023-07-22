import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/orders`, config);
  return response.data;
};

const getOrderByUser = async (id: any) => {
  const response = await axios.get(`${base_url}user/user-orders/${id}`, config);
  return response.data;
};

const getMonthlyOrders = async () => {
  const response = await axios.get(`${base_url}user/wise-order-income`, config);
  return response.data;
};

const getYearlyStats = async () => {
  const response = await axios.get(`${base_url}user/yearly-income`, config);
  return response.data;
};

const orderService = {
  getOrders,
  getOrderByUser,
  getMonthlyOrders,
  getYearlyStats,
};
export default orderService;
