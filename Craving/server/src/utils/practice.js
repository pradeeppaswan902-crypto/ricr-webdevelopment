import jwt from 'jsonwebtoken'

const genToken = (user, res) =>{
  try {
    const payload = {
        id : user_id,
        role : user.role || "admin"
    }
  const asd = jwt.sign(payload, process.env.SECRET_KEY,"1d")
  res.cookie("parlleG", asd,{
    maxAge : 1000*60*60*24,
    httpOnly : true,
    secure : false,
    sameSite : "lax"
  })
    
  } catch (error) {
    throw error
  }
}