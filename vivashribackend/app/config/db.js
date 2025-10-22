import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // dbName: "vivashriDB",
      dbName: "vivashriDevelopementDB",
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Failed to connect to database.");
    console.error(error);
  }
};
