import mongoose from "mongoose";
const { Schema } = mongoose;

const ReligionSchema = new Schema(
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

const ReligionModel =
  mongoose.models.Religion || mongoose.model("Religion", ReligionSchema);

export default ReligionModel;
