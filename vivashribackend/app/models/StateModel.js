import mongoose from "mongoose";
const { Schema } = mongoose;

const StateSchema = new Schema(
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
    status: {
      type: String,
      enum: ["Active", "Deactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const StateModel =
  mongoose.models.State || mongoose.model("State", StateSchema);

export default StateModel;
