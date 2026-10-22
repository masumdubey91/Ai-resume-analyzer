const express= require("express");
const router=express.Router();

const {SignUp,login,getProfile}=require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup",SignUp)
router.post("login",login)
router.get("/profile",authMiddleware,getProfile)

module.exports=router;
