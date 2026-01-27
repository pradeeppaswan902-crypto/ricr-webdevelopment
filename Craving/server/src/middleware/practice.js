import jwt from 'jsonwebtoken'

const Protect = (req, res, next) =>{
try {
    
        const protec = req.cookie.parleG;

    if(!protec){
        const error = new Error("Un Athorized User")
        error.statusCode = 401;
        return 
    }
    
    const verifyuser = jwt.sign(protec, process.env.JWT_SECRET);

    if(!verifyuser){
        const error = new Error("Not VeryFied User")
        error.statusCode = 401;
        return next(error)
    }

    req.user = verifyuser
} catch (error) {
    throw error
}

}