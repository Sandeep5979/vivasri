import mongoose from "mongoose";
const { Schema } = mongoose;

const UserPlanSchema = new Schema(
  {
    user_id: {
      type:  mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    plan_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MembershipPlan",
      required: true,
    },
    price: {
      type: Number,
      required: true,  
      trim: true     
    },
    start_date: {
      type: Date,
      required: true,  
      trim: true     
    },
    expiry_date: {
      type: Date,  
      trim: true     
    },
    status: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
    
  },
  { timestamps: true }
);

const UserPlanModel =
  mongoose.models.UserPlan || mongoose.model("UserPlan", UserPlanSchema);

export default UserPlanModel;
