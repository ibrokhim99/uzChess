import { ACCESS_TOKEN_KEY } from "@/lib/constants";
import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
export const BEARER_HEADER = (token: string) => `Bearer ${token}`;
axiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
      config.headers.Authorization = BEARER_HEADER(
        localStorage.getItem(ACCESS_TOKEN_KEY) as string
      );
    }

   
    return config;
  },
  (error) => Promise.reject(error)
);


