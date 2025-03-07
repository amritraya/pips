import { error, log } from "console";
import mongoose from "mongoose";

const MONGODB_CS=process.env.MONGODB_CS;

if(!MONGODB_CS){
    throw new Error("no mongodb connection string")
}

const Connect=async()=>{
    if(mongoose.connection.readyState===1){
        console.log("database already connected")
        return 
    }
   try{
    await mongoose.connect(MONGODB_CS)
   return console.log("database connected successfully")
   }
   catch(error){
    console.log("error in connecting", error)
   }
   
}

export default Connect

