const jwt = require("jsonwebtoken")

const authMiddleware=async(req,res,next)=>{
    try{
    const token =req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    const jwtToken = token.split(" ")[1];
    const decoded = jwt.verify(
        jwtToken,
        process.env.JWT_SECRET,

    )
    req.user=decoded;
    next();

} catch(error){
    res.status(500).json({
        message:"Token not found"
    })
}
}
module.exports=authMiddleware;