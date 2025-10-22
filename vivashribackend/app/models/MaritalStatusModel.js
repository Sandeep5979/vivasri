import mongoose from "mongoose";
const { Schema } = mongoose;

const MaritalStatusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,  
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

const MaritalStatusModel =
  mongoose.models.MaritalStatus || mongoose.model("MaritalStatus", MaritalStatusSchema);

export default MaritalStatusModel;
