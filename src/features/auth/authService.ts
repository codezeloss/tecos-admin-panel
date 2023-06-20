import { base_url } from "../../utils/base_url.ts";
import axios from "axios";

// ** USER LOGIN
const login = async (userData: any) => {
  const response = await axios.post(`${base_url}user/login-admin`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  login,
};
export default authService;
