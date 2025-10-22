import mongoose from "mongoose";
const { Schema } = mongoose;

const CountrySchema = new Schema(
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

const CountryModel =
  mongoose.models.Country || mongoose.model("Country", CountrySchema);

export default CountryModel;
