import mongoose from "mongoose";
const { Schema } = mongoose;

const SubCasteSchema = new Schema(
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
    status: {
      type: String,
      enum: ["Active", "Deactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const SubCasteModel =
  mongoose.models.SubCaste || mongoose.model("SubCaste", SubCasteSchema);

export default SubCasteModel;
