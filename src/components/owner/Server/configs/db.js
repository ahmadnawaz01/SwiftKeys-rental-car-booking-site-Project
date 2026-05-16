import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try{
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });
    await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'swiftkeys',
            family: 4,
        });
    }catch(error){
        console.log(error.message);
        
    }
}


export default connectDB;