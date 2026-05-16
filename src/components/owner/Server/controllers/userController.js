import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateTOken=(id)=>{
    const payload=id;
    return jwt.sign(payload,process.env.JWT_SECRET)
}

export const registerUser=async(req,res)=>{
    try{
         const {name,email,password}=req.body;

         if(!name || !email || !password || password.length<8){
            return res.json({sucess:false,message:"All fields are required and password must be at least 8 characters long"})
         }
         const userExists=await User.findOne({email})
         if(userExists){
            return res.json({sucess:false,message:"user already exists"})
         }
         const hashPassword=await bcrypt.hash(password,10);
         const user=await User.create({
            name,
            email,
            password:hashPassword
         })
         const token=generateTOken(user._id.toString())
         res.json({success:true,token})
         



    }catch(error){
        console.log(error.message);
        res.json({success:false,message:"error.message"})
        
    }
}



export const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email})
        if(!user){
            return res.json({success:false,message:"User not found"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token=generateTOken(user._id.toString())
        res.json({success:true,token})
    }catch(error){
        console.log(error.message);
        res.json({success:false,message:"error.message"})
    }
}



export const getUserData=async(req,res)=>{

    try{
        const {user}=req;
        res.json({success:true,user})



    }catch(error){
        console.log(error.message);
        res.json({success:false,message:"error.message"})        
    }
}