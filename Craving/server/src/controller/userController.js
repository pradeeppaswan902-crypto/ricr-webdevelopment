import User from "../models/model.js";
import bcrypt from "bcrypt";

export const userRegister = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, password } = req.body;

    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All Field Required");
      error.statusCode = 400;
      return next(error);
    }

    const exstinData = await User.findOne({ email });
    if (exstinData) {
      const error = new Error("Email Already Register");
      error.statusCode = 409;
      return next(error);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    res.status(201).json({
      message: "Register Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 
export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Field Required");
      error.statusCode = 400;
      return next(error);
    }

    const exstinData = await User.findOne({ email });
    if (!exstinData) {
      const error = new Error("Email not Register");
      error.statusCode = 404;
      return next(error);
    }

    const isverfied = await bcrypt.compare(password, exstinData.password);
    if (!isverfied) {
      const error = new Error("Password Not Matched");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({
      message: "Login Successful",
      data: exstinData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const Logout = (req, res) => {
  try {
    res.status(200).json({
      message: "Logout Successful",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
