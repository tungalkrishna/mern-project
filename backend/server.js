import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Import your application routes
import userRoutes from "./routes/userRoutes.js";

// Load environment variables (like PORT, MONGODB_URI, and FRONTEND_URL)
dotenv.config();

const app = express();

// --- 1. Middleware Setup (Including the Critical CORS Fix) ---

// Middleware to parse JSON bodies (needed for POST requests)
app.use(express.json());

// Set up the secure CORS policy
// This reads the allowed origin from the environment variables.
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'; 

// CORS Configuration Object
const corsOptions = {
    // Allows the specified frontend URL (Vercel deployment) to make requests
    origin: FRONTEND_URL,
    // Specify the allowed HTTP methods
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // Allow credentials (like cookies or auth headers) to be sent
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// --- 2. Route Definitions ---

// Basic root route for testing deployment health
app.get('/', (req, res) => {
    res.send(`API is running successfully. Allowed origin: ${FRONTEND_URL}`);
});

// User/Auth routes
app.use("/api/auth", userRoutes); 

// --- 3. Database Connection ---

// Connect to MongoDB
connectDB();


// --- 4. Server Start ---

// Use environment variable PORT (required by hosting platforms like Render) or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`CORS configured for: ${FRONTEND_URL}`);
});

// Basic error handling for unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.error(`Error: ${err.message}`);
});