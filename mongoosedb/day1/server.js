// mongodb --> mongodb compass (visual representation of database)

// backend = server(24x7 interent,electricity) + database(internet, elecricity)

// server --> localhost
// database --->

import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/school")
  .then(() => console.log("database connected successfully !"))
  .catch((err) => console.log(err.message));

// Schema & Model
// schema - structure of database / how data will be organizly stored in database.
// model - object/variable which can perform all operation into database.

// collection -> is the collection(group) of multiple collection(<-) and documents.
// collection -> is group of multiple data in key value pair.
// document - where actual data is stored.

// database -> collection -> data(kye-value)

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    course: { type: String, required: true },
    city: { type: String },
  },
  {
    timestamps: true,
  },
);

const StudentsModel = mongoose.model("Students", studentSchema);

await StudentsModel.create({
  name: "Aman Gupta",
  age: 22,
  course: "MBA",
  city: "Mumbai",
});

// backend = server(express js) + database(mongodb)
