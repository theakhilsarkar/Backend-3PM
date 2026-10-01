import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auth");
    console.log("database connected successfully !");
  } catch (err) {
    console.log("Database connection failed - " + err.message);
  }
};
