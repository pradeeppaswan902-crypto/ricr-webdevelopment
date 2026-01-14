import express from "express";
import { registerStudent } from "../controller/userController.js";


const router = express.Router();

router.post("/register", registerStudent);

export default router;
