const mongoose = require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:[true,"username already taken"]

    },
    email:{
        type:String,
        required:true,
        unique:[true,"Account already exists with this email address"],

    },
    password:{
        type:Number,
        required:true,
    }
})

module.exports=mongoose.model("User",userSchema);
