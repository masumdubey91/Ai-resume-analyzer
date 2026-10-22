const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv")

dotenv.config();
 const connectDb=require("./config/db")

 connectDb();
 const app=express();

 app.use(express.json());
 app.use(cors());



 app.use("/api/auth",require("./routes/userRoutes"))
 app.use("/api/resume",require("./routes/resumeRoutes"))







app.listen(3000,()=>{
    console.log("server is running on port 3000")
})