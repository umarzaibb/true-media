import { Schema, Types } from "mongoose";
import mongoose from "../utils/connectDB";

const userSchema= new Schema({
    name: String,
    email: String,
    password: String,
    profileID: {
        type: mongoose.ObjectId,
        ref: 'profile',
        required: false
    }
})

export default mongoose.model('User', userSchema);