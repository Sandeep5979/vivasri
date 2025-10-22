import mongoose from "mongoose";
const { Schema } = mongoose;

const CitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,  
      trim: true     
    },
    country_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    state_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
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

const CityModel =
  mongoose.models.City || mongoose.model("City", CitySchema);

export default CityModel;
