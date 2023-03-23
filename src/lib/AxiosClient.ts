import { LocalStorageHandler } from "@/utils/LocalStorageHandler";
import axios from "axios";

const AxiosClient = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
  });
  axiosInstance.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${
      LocalStorageHandler.getUserToken()?.access_token
    }`;
    return request;
  });
  axiosInstance.interceptors.response.use((response) => {
    return response;
  });
  return axiosInstance;
};

export default AxiosClient();
