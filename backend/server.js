// Debug handlers to show hidden errors
process.on("uncaughtException", err => {
  console.error("UNCAUGHT ERROR:", err);
});
process.on("unhandledRejection", err => {
  console.error("UNHANDLED PROMISE:", err);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { registerUser, loginUser } from "./controllers/authController.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.post("/api/register", registerUser);
app.post("/api/auth/login", loginUser);

// Protected Route
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile accessed",
    user: req.user,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
