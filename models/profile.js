import { Schema, Types } from "mongoose";
import mongoose from "../utils/connectDB";

const ProfileSchema= new Schema({
    fullName: {
        type: String
    },
    profession: String,
    location: {
        type: String
    },
    website: String,
});

let Profile= mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);

export default Profile;