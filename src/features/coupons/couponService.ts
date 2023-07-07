import axios from "axios";
import { base_url } from "../../utils/base_url.ts";
import { config } from "../../utils/axios_config.ts";

const getAllCoupons = async () => {
  const response = await axios.get(`${base_url}coupon/`, config);
  return response.data;
};

const createCoupons = async (coupon: any) => {
  const response = await axios.post(`${base_url}coupon/`, coupon, config);
  return response.data;
};

const updateCoupon = async (coupon: any) => {
  const response = await axios.put(
    `${base_url}coupon/${coupon.id}`,
    {
      name: coupon.couponData.name,
      expiry: coupon.couponData.expiry,
      discount: coupon.couponData.discount,
    },
    config
  );
  return response.data;
};

const getCoupon = async (id: string) => {
  const response = await axios.get(`${base_url}coupon/${id}`, config);
  return response.data;
};

const deleteCoupon = async (id: any) => {
  const response = await axios.delete(`${base_url}coupon/${id}`, config);
  return response.data;
};

const couponService = {
  getAllCoupons,
  createCoupons,
  updateCoupon,
  getCoupon,
  deleteCoupon,
};
export default couponService;
