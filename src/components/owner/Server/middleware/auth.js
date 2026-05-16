
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect=async (req, res, next) => {
    const token=req.headers.authorization;
    if(!token){
        return res.json({success:false,message:"No token provided"})
    }
    try{
        const userid=jwt.decode(token,process.env.JWT_SECRET);
        if(!userid){
            return res.json({success:false,message:"Invalid not authorized token"})
        }
        req.user= await User.findById(userid).select("-password")
        next();

    }catch(error){
        console.log(error.message);
        return res.json({success:false,message:"Error occurred while verifying token"})
      }
}