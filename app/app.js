import express from 'express';
import dbConnect from '../config/dbConnect.js';
import dotenv from 'dotenv';
import userRoutes from '../routes/usersRoutes.js';
dotenv.config();

// Connect to database
dbConnect();
const app = express();

//pass incoming data
app.use(express.json());

//routes
app.use("/",userRoutes)

export default app;