import User from "../models/userModel.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      const error = new Error("All Field Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User Already Exists");
      error.statusCode = 409;
      return next(error);
    }

    await User.create({
      fullName,
      email,
      phone,
      password,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("Email and Password Required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    if (user.password !== password) {
      const error = new Error("Invalid Credentials");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

export const UserUpdate = async (req, res, next) => {
  try {
    const { email, fullName, phone } = req.body;

    if (!email || !fullName || !phone) {
      const error = new Error("All Field Required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    user.fullName = fullName;
    user.phone = phone;

    await user.save();

    res.status(200).json({
      message: "Data Update Successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
