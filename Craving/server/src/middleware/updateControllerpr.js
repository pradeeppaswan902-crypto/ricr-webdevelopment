import User from "../models/model.js";

const update = async (req, res, next) => {
  try {
    const { fullName, email, password, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !password || !mobileNumber) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const updatedUser = await User.findByIdAndUpdate(
      currentUser.id,
      {
        fullName,
        email,
        password,
        mobileNumber,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });

  } catch (error) {
    next(error);
  }
};

export default update;
