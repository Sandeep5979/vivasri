import mongoose from "mongoose";
const { Schema } = mongoose;

const UserViewSchema = new Schema(
  {
    user_id: {
      type:  mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    view_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    
  },
  { timestamps: true }
);

const UserViewModel =
  mongoose.models.UserView || mongoose.model("UserView", UserViewSchema);

export default UserViewModel;
