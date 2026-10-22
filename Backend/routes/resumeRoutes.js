const express=require("express")
const upload=require("../middleware/uploadMiddleware")
const authMiddleware=require("../middleware/authMiddleware")
const router=express.Router();
const {uploadResume}=require("../controllers/resumeController");


router.post("/upload",upload.single("resume"),uploadResume)
module.exports=router;

