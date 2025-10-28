import mongoose from "mongoose";
const { Schema } = mongoose;

const InterestSchema = new Schema(
  {
    member_id: {
      type:  mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    partner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted","Declined"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const InterestModel =
  mongoose.models.SentInterest || mongoose.model("SentInterest", InterestSchema);

export default InterestModel;
