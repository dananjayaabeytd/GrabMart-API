import express from 'express';
import { registerUserCtrl,loginUserCtrl } from '../controllers/usersCtrl.js';

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);

export default userRoutes;