import axios from "axios";
import { base_url } from "../../utils/base_url.ts";
import { config } from "../../utils/axios_config.ts";

const uploadImg = async (data: any) => {
  const response = await axios.post(`${base_url}upload/`, data, config);
  return response.data;
};

const deleteImg = async (id: string) => {
  const response = await axios.delete(
    `${base_url}upload/delete-img/${id}`,
    id,
    config
  );
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;
