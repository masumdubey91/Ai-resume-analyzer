const cloudinary=require("../config/cloudinary")
const streamifier = require("streamifier");

const uploadToCloudinary=async(buffer)=>{
    return new Promise((resolve,reject)=>{
        const stream=cloudinary.uploader.upload_stream(
           {
            resource_type:"raw",
           },
        
        (error,result)=>{
            if(error){
                return reject(error)
            }
           resolve(result)
            


        }
        )
        streamifier.createReadStream(buffer).pipe(stream);

    })

}
module.exports=uploadToCloudinary;