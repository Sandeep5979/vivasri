import mongoose from "mongoose";
const { Schema } = mongoose;

const CasteSchema = new Schema(
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
    status: {
      type: String,
      enum: ["Active", "Deactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const CasteModel =
  mongoose.models.Caste || mongoose.model("Caste", CasteSchema);

export default CasteModel;
