import axios from "axios";

// Base URL of your live backend on Render
const API = axios.create({
  baseURL: "https://mern-project-1-091l.onrender.com", // <-- update this
});

// Register user
export const registerUser = (data) => API.post("/api/auth/register", data);

// Login user
export const loginUser = (data) => API.post("/api/auth/login", data);

// Example for future APIs
// export const getProfile = () => API.get("/api/user/profile");
