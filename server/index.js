import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import apiRoute, { apiProtected } from './src/routes/api.js';
import AuthMiddleware from './src/middlewares/AuthMiddleware.js';
import connectDB from './src/db/index.js';

const app = express();
const PORT = 3000;

// Client URL - make sure this is accurate
const vercelURL = 'https://todo-app-murex-rho.vercel.app'
const localURL = 'http://localhost:5173';  // Client running on port 5173

const URL = vercelURL;

const corsOption = {
    origin: URL,  // Allow requests only from this origin
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,  // Allow sending cookies/credentials
    optionSuccessStatus: 200
};

app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());

app.use("/api/", apiRoute);
app.use("/api/", AuthMiddleware, apiProtected);

// Connect the database and start the server
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => {
        console.error("Database connection failed", error);
    });
