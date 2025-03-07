import mongoose, { Schema } from "mongoose";

const userSchema= new Schema({
    userName:{
        type:String,
        required: true
    },
    userEmail:{
        type:String,
        required: true
    },
    userPicture:{
        type: String,
        required: true
    }
})

const User=mongoose.models.User||mongoose.model("User",userSchema)

export default User