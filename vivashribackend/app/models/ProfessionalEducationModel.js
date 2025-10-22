import mongoose from "mongoose";
const { Schema } = mongoose;

const ProfessionalEducationSchema = new Schema(
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

const ProfessionalEducationModel =
  mongoose.models.ProfessionalEducation || mongoose.model("ProfessionalEducation", ProfessionalEducationSchema);

export default ProfessionalEducationModel;
