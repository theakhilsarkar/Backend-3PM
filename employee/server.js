import express from "express";
import { connectDB } from "./config/db.js";
import employe_routes from "./routes/employee_routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();
app.use("/api/employee", employe_routes);

app.listen(5000, () => {
  console.log("server started successfully !");
});

