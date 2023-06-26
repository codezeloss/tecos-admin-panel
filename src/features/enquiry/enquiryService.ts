import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL ENQUIRIES
const getEnquiries = async () => {
  const response = await axios.get(`${base_url}enquiry`);
  return response.data;
};

const enquiryService = {
  getEnquiries,
};
export default enquiryService;
