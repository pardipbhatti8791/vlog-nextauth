import axios from "axios";

export const BASE_URL = "http://localhost:3015/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const URI = {
  auth: {
    signIn: "/signin",
  },
};

export default axiosInstance;
