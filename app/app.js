import express from 'express';
import dbConnect from '../config/dbConnect.js';
import dotenv from 'dotenv';
import userRoutes from '../routes/usersRoutes.js';
import { globalErrorHandler,notFound } from '../middlewares/globalErrorHandler.js';
dotenv.config();

// Connect to database
dbConnect();
const app = express();

//pass incoming data
app.use(express.json());

//routes
app.use("/",userRoutes)

//error middleware
app.use(notFound);
app.use(globalErrorHandler);

export default app;