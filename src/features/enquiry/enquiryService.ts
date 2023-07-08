import { base_url } from "../../utils/base_url.ts";
import axios from "axios";
import { config } from "../../utils/axios_config.ts";

const getEnquiries = async () => {
  const response = await axios.get(`${base_url}enquiry`);
  return response.data;
};

const getEnquiry = async (id: any) => {
  const response = await axios.get(`${base_url}enquiry/${id}`);
  return response.data;
};

const deleteEnquiry = async (id: any) => {
  const response = await axios.delete(`${base_url}enquiry/${id}`, config);
  return response.data;
};

const updateEnquiry = async (enquiry: any) => {
  const response = await axios.put(
    `${base_url}enquiry/${enquiry.id}`,
    { status: enquiry.enquiryData },
    config
  );
  return response.data;
};

const enquiryService = {
  getEnquiries,
  getEnquiry,
  deleteEnquiry,
  updateEnquiry,
};
export default enquiryService;
