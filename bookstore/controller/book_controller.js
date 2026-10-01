import { Book } from "../models/book_model.js";

// controller is one type of function where specified process to handle request

export const insertBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json({
      status: true,
      message: "Book Inserted Successfully !",
      book,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Book Insertion Failed !",
      err: err.message,
    });
  }
};

export const fetchBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json({
      status: true,
      message: "Book Fetched Successfully!",
      books,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "Book Fetching failed !",
      err: err.message,
    });
  }
};

export const removeBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id); // id pass --> find --> delete
    res.json({
      status: true,
      message: "Book Deleted Successfully!",
      book,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "Book deletion failed !",
      err: err.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const data = req.body;
    const book = await Book.findByIdAndUpdate(data.id, { $set: data });
    res.json({
      status: true,
      message: "Book updated Successfully!",
      book,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "Book updation failed !",
      err: err.message,
    });
  }
};

// req - user send ->
// 1. query parameter - 2 to 4 values : req.query
// 2. params - single value : req.params
// 3. body - multiple value : req.body


// POSTMAN - software API Testing...
// browser view
// desktop view ::::::::

// Create a backend system where perform all crud operation to manage books.

// Create a Employee Management System Backend by using Mongoose and Express. MAINTAIN PROPER FOLDER STRUCTURE.
// 1. Employee ADD,UPDATE,DELETE,DISPLAY

// today ...