import axios from "axios";

// Base URL of your backend
const API = axios.create({
  baseURL: "http://localhost:5000",
});

// Register user
export const registerUser = (data) => API.post("/api/auth/register", data);

// Login user
export const loginUser = (data) => API.post("/api/auth/login", data);

// You can add more APIs later, ex:
// export const getProfile = () => API.get("/api/user/profile");
