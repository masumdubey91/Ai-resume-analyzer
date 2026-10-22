const mongoose =require("mongoose")
const resumeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,   
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",   
    },
    resumeUrl:{
        type:String,
        required:true,
    },
    resumeText:{
        type:String,
    },
    analysis:{
        type:Object,
    }
},
{
    timestamps:true,
}
)
module.exports=mongoose.model("Resume",resumeSchema)