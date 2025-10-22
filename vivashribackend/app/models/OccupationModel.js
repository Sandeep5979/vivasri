import mongoose from "mongoose";
const { Schema } = mongoose;

const OccupationSchema = new Schema(
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

const OccupationModel =
  mongoose.models.Occupation || mongoose.model("Occupation", OccupationSchema);

export default OccupationModel;
