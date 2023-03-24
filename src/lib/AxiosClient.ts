import { ApiService } from "@/api";
import { LocalStorageHandler } from "@/utils/LocalStorageHandler";
import axios, { AxiosError } from "axios";

const AxiosClient = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
  });
  axiosInstance.interceptors.request.use(
    (request) => {
      request.headers.Authorization = `Bearer ${
        LocalStorageHandler.getUserToken()?.access_token
      }`;
      return request;
    },
    (err: AxiosError) => {
      throw err;
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err: AxiosError) => {
      if (err.response?.status === 401) {
        try {
          const tokens = LocalStorageHandler.getUserToken();
          const { data } = await ApiService.refreshToken(tokens!.refresh_token);
          LocalStorageHandler.setUserToken(
            data.access_token,
            tokens!.refresh_token
          );
          err.config!.headers["Authorization"] = `Bearer ${data.access_token}`;
          if (err.config) {
            axiosInstance(err.config);
          }
        } catch (err) {
          LocalStorageHandler.removeUserToken();
          window.location.href = "/login";
        }
      } else {
        throw err;
      }
    }
  );
  return axiosInstance;
};

export default AxiosClient();
