import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// Auto-add token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



// Protected route
export const getProfile = () => API.get("/api/auth/profile");

export default API;
