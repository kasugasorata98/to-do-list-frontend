import { Constants } from "@/constants";
import AxiosClient from "@/lib/AxiosClient";

export const ApiService = {
  getAuthLink: (callback: string) => {
    const query = new URLSearchParams({ callback });
    return AxiosClient.get(`${Constants.ENDPOINTS.getAuthLink}?${query}`);
  },
};
