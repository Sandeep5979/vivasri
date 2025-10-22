import mongoose from "mongoose";
const { Schema } = mongoose;

const LanguageSchema = new Schema(
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

const LanguageModel =
  mongoose.models.Language || mongoose.model("Language", LanguageSchema);

export default LanguageModel;
