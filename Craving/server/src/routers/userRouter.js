import express from "express";
import { UserUpdate } from "../controller/UserUpdate.js";
import { Protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.put("/update", Protect, UserUpdate);

export default router;