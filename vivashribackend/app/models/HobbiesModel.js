import mongoose from "mongoose";
const { Schema } = mongoose;

const HobbiesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,  
      trim: true     
    },
     icon: {
      type: String,
      default: null,  
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

const HobbiesModel =
  mongoose.models.Hobbies || mongoose.model("Hobbies", HobbiesSchema);

export default HobbiesModel;
