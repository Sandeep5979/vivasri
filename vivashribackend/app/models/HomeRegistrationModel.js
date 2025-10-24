import mongoose from "mongoose";
const { Schema } = mongoose;

const HomeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      default: null,
      set: v => (v === "" ? null : v),
    },
    mobile: {
      type: String,
      trim: true,
      default: null,
      set: v => (v === "" ? null : v),
    },
    create_profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LookingFor",
      default: null,
      set: v => (v === "" ? null : v),
      
    },
    
    
  },
  { timestamps: true }
);

const HomeRegistrationModel =
  mongoose.models.HomeRegistration || mongoose.model("HomeRegistration", HomeSchema);

export default HomeRegistrationModel;
