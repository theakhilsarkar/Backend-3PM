import express from "express";
import { connectDB } from "./config/db.js";
import book_routes from "./routes/book_routes.js";

const app = express();
app.use(express.json());

connectDB();

// register of routes
app.use("/api/book", book_routes);

app.listen(4000, () => {
  console.log("server started successfulyy !!");
});

// http://localhost:4000/api/book
// GET,POST,PUT,DELETE

// resume and portfolio
