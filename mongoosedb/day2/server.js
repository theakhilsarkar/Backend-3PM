import express from "express";
import mongoose from "mongoose";

const app = express();

await mongoose
  .connect("mongodb://localhost:27017/College")
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const schema = new mongoose.Schema({
  name: String,
  course: String,
});

const Students = mongoose.model("vidhyarthi", schema);

app.get("/", async (req, res) => {
  const data = await Students.find();
  res.json(data);
});

app.post("/", async (req, res) => {
  await Students.create({ name: "Aman Gupta", course: "B.Tech" });
  res.send("Student added successfully !");
});

app.listen(4000, () => {
  console.log("server started successfully !");
});
