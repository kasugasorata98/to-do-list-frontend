import { Constants } from "@/constants";
import AxiosClient from "@/lib/AxiosClient";

export const ApiService = {
  getAuthLink: (callback: string) => {
    const query = new URLSearchParams({ callback });
    return AxiosClient.get<{
      authorizeLink: string;
    }>(`${Constants.ENDPOINTS.getAuthLink}?${query}`);
  },
  authorize: (code: string, callback: string) => {
    return AxiosClient.post<{
      access_token: string;
      refresh_token: string;
    }>(Constants.ENDPOINTS.authorize, {
      code,
      callback,
    });
  },
};
