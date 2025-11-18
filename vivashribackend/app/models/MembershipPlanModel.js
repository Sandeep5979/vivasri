import mongoose from "mongoose";
const { Schema } = mongoose;

const MembershipPlanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,  
      trim: true     
    },
    price: {
      type: Number,
      required: true,  
      trim: true     
    },
    
    status: {
      type: String,
      enum: ["Active", "Deactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const MembershipPlanModel =
  mongoose.models.MembershipPlan || mongoose.model("MembershipPlan", MembershipPlanSchema);

export default MembershipPlanModel;
