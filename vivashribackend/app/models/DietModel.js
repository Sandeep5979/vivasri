import mongoose from "mongoose";
const { Schema } = mongoose;

const DietSchema = new Schema(
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

const DietModel =
  mongoose.models.Diet || mongoose.model("Diet", DietSchema);

export default DietModel;
