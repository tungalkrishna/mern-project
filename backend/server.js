import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 

import userRoutes from "./routes/userRoutes.js";   // ← FIXED NAME

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes); // ← FIXED

connectDB();


app.listen(5000, () => console.log("Server running on port 5000"));
