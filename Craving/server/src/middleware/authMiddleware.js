import jwt from "jsonwebtoken";
import User from "../models/model.js";

export const Protect = async (req, res, next) => {
  try {
    const biscut = req.cookies.parleG;
    console.log("Token recived in Cookies:", biscut);

    const tea = jwt.verify(biscut, process.env.JWT_SECRET);
    console.log(tea);
    if (!tea) {
      const error = new Error("Unauthorized! Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(tea.id);
    if (!verifiedUser) {
      const error = new Error("Unauthorized! Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;
    

    next();
  } catch (error) {
    next(error);
  }
};



const Protectedd = (req, res, next) =>{
try {
  
const biskut = req.cookies.parleG

const tea = jwt.verify(biskut, process.env.JWT_SECRET);
if(!tea){
  const error = new Error("User Not Found")
  const statusCode = 401
}



} catch (error) {
  
}

}