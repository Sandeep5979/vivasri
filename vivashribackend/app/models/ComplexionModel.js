import mongoose from "mongoose";
const { Schema } = mongoose;

const ComplexionSchema = new Schema(
  {
    name: {
      type: String,
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

const ComplexionModel =
  mongoose.models.Complexion || mongoose.model("Complexion", ComplexionSchema);

export default ComplexionModel;