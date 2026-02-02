import express from "express";
import {
  UserRegister,
  UserLogin,
  UserLogout,
  UserGenOTP,
  UserVerifyOtp,
  UserForgetPassword
} from "../controller/userController.js"
import { OtpProtect } from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);

router.post("/genOtp", UserGenOTP);
router.post("/verifyOtp", UserVerifyOtp);
router.post("/forgetPasword",OtpProtect,UserForgetPassword)

export default router;