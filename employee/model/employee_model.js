import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    emp_id: { type: Number, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    age: { type: Number, required: true },
    salary: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Employee = mongoose.model("employees", employeeSchema);
