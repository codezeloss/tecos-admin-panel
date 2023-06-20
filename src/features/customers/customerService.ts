import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** GET ALL USERS
const getUsers = async () => {
  const response = await axios.get(`${base_url}user/all-users`);
  return response.data;
};

const customerService = {
  getUsers,
};
export default customerService;
