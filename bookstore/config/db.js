import mongoose from "mongoose";
// 1. database connect
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookstore");
    console.log("Database connected successfully !");
  } catch (err) {
    console.log("Database connection failed : ERROR - " + err.message);
  }
};

// db connect -> db structure -> db model -> controllers -> routes -> server
