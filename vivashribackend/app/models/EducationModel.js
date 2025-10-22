import mongoose from "mongoose";
const { Schema } = mongoose;

const EducationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,  
      trim: true     
    },
    education_type: {
      type: Number,  
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

const EducationModel =
  mongoose.models.Education || mongoose.model("Education", EducationSchema);

export default EducationModel;
