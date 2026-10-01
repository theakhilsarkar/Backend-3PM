import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth_routes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("server started successfully !");
});

// broswer storage -
// local - perement
// cookie - expiry - auto delete
// session - tab active
