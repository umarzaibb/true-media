import { Schema, Types } from "mongoose";
import mongoose from "../utils/connectDB";

const userSchema= new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    profileID: {
        type: mongoose.ObjectId,
        ref: 'profile',
        required: false
    },
    accessToken: {
        type: String,
    },
    accessTokenExpiry: {
        type: Date
    },
    emailToken: Number,
    emailTokenExpiry: {
        type: Date
    },
    isVerified: Boolean
});

let User= mongoose.model('User', userSchema);

export default User;