import mongoose from "mongoose";
const { Schema } = mongoose;

const GotraSchema = new Schema(
  {
    name: {
      type: String,
      required: true,  
      trim: true     
    },
    religion_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Religion",
      required: true,
    },
    caste_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Caste",
      required: true,
    },
    sub_caste_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCaste",
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Deactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const GotraModel =
  mongoose.models.Gotra || mongoose.model("Gotra", GotraSchema);

export default GotraModel;
