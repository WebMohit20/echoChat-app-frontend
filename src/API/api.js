import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5000/api",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    }
});
apiClient.interceptors.request.use(
    (config) => {
      const userDetails = localStorage.getItem("user");
  
      if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
});
export default apiClient;