const User =require("../models/user")
const bcrypt=require("bcryptjs")
const jwt =require("jsonwebtoken");
const { get } = require("mongoose");


const SignUp=async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
       return res.status(400).json({
        message:"Please fill all the required fields"
       })
    }
 const existingUser=await User.findOne({email})
 if(existingUser){
    return res.status(400).json({
        message:"User Already exists"

    })
 }
 const hashedPassword=await bcrypt.hash(password,10);
 const user = await User.create({
    name,
    email,
   password: hashedPassword,
 })
 res.status(201).json({
    
    message:"User registered Succesfully"
 })
}
catch(error){
    res.status(500).json({
        message:error.message
    })
}
}

const login =async(req,res)=>{
    try{
     const {email,password}=req.body;
     if(!email || !password){
        return res.status(400).json({
            message:"Please fill all fields"
        })
     }
     const user =await User.findOne({email})
     if(!user){
        return res.status(400).json({
            message:"User not found"
        })
     }
     const isMatch= await bcrypt.compare(
        password,
        user.password,

     )
     if(!isMatch){
        return res.status(400).json({
            message:"Invalid Password"
        })
     }
     const token =jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
     )
   res.status(200).json({
    message:"Login Successful",
    token,
    user

   })
    }
    catch(error){
        res.status(500)({
            message:error.message

        })
    }
}
const getProfile=async(req,res)=>{
    try{
         const userId= req.user.id;
      const user =await User.findById(userId).select("-password");
      
      res.status(200).json({

        user,
      })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
   
}
   
module.exports={SignUp,login,getProfile}