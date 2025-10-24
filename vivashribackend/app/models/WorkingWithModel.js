import mongoose from "mongoose";
const { Schema } = mongoose;

const WorkingWithSchema = new Schema(
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

const WorkingWithModel =
  mongoose.models.WorkingWith || mongoose.model("WorkingWith", WorkingWithSchema);

export default WorkingWithModel;
