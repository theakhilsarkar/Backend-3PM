import mongoose from "mongoose";

// 2. schema
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true },
);
// 3. model - actual object which help to interact with database.
export const Book = mongoose.model("bookstore", bookSchema);
