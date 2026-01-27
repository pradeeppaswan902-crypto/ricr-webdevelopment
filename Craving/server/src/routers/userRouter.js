import express from "express";
import { UserUpdate } from "../controller/UserUpdate.js";
import { Protect } from "../middleware/authMiddleware.js";
import { UserChangePhoto } from "../controller/UserUpdate.js";

const router = express.Router();

router.put("/update", Protect, UserUpdate);
router.patch("/changePhoto", Protect, UserChangePhoto);




export default router;