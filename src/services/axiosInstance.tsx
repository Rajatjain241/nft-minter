import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.pinata.cloud/",
});

export default axiosInstance;
