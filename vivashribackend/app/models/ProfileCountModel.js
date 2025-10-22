import mongoose from "mongoose"
const { Schema } = mongoose;

const profileCountSchema = new Schema({
    count:{
        type:Number,
        default:1,
    }
}, { timestamps:true })

const ProfileCountModel = mongoose.models.ProfileCount ||  mongoose.model("ProfileCount", profileCountSchema)
export default ProfileCountModel