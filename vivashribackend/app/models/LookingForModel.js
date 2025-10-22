import mongoose from "mongoose";
const { Schema } = mongoose;


const LookingForSchema = new Schema({
    name:{
        type:String, 
        required: true,
    },
    status: {
      type: String,
      enum: ['Active', 'Deactive'],
      default: 'Active',
    },
    
    

}, {timestamps:true})

const LookingForModel = mongoose.models.LookingFor || mongoose.model("LookingFor", LookingForSchema);
export default LookingForModel