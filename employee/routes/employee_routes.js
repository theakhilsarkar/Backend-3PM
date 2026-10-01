import express from "express";
import {
  deleteEmployee,
  displayEmployee,
  insertEmployee,
  pagination,
  searchById,
  searchByName,
  searchByRole,
  searchEmployee,
  updateEmployee,
} from "../controller/employee_controller.js";

const router = express.Router();

router.get("/", displayEmployee);
router.post("/", insertEmployee);
router.put("/", updateEmployee);
router.delete("/:id", deleteEmployee);

router.get("/id", searchById);
router.get("/name:name", searchByName);
router.get("/role", searchByRole);

router.get("/pagination", pagination);
router.get("/search", searchEmployee);

export default router;

// Storage
// browser - localStorage, cookieStore(server side), sessionStorage
// 5-10mb
// 5
// 5kb -->

// url - 150 url, 35
