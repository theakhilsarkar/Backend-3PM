import express from "express";
import {
  fetchBooks,
  insertBook,
  removeBook,
  updateBook,
} from "../controller/book_controller.js";

const router = express.Router();

router.post("/", insertBook);
router.get("/", fetchBooks);
router.delete("/:id", removeBook);
router.put("/", updateBook);

export default router;
