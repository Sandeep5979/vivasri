import mongoose from "mongoose";
const { Schema } = mongoose;

const AdminSchema = new Schema({
   name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true, // Active by default
  },
});

const AdminModel =
  mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default AdminModel;