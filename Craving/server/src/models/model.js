import mongoose from "mongoose";

const userShema =  mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,

    },
    email: {
      type: String,
      required: true,
      unique : true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    
  },
  {  timestamps: true, }
);

const User = mongoose.model("User", userShema);

export default User;
