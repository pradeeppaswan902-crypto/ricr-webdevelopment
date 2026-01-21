import jwt from 'jsonwebtoken'

export const genToken = (user, res) =>{

    const payload = {
        id : user._id,
        role : user.role || "admin"
        
    }
   const token =  jwt.sign(payload, process.env.JWT_SECRET,"1d") 

   res.cookie("Store", {
    maxAge : 1000*60*60*24,
    httpOnly : true,
    secure : false,
    sameSite : "lax"

   })
}
