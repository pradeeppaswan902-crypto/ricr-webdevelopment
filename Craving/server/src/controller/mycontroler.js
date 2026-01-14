import User from "../models/model";
import bycrpt from "bcrypt";

export const userRegister =async () => {
  const { fullName, email, mobileNumer, password } = req.body;

  if (!fullName || !email || !mobileNumer || !password) {
    const error = new Error("All Fiels Are Required");
    error.errorCode = 400;
    return next(error)
  }
  const existingData = await User.findOne({email})

  if(existingData) {
    const error = new Error("Email All Ready exist")
    error.errorCode = 409;
    return next(error) 
  }

  //password Hashing 

  const salt = await bycrpt.genSalt(10);
  const HashPassword = await bycrpt.hash(password, salt)

  const newData = await create({
    fullName,
    email,
    mobileNumer,
    password
  })

  
};
