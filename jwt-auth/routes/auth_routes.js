import express from "express";
import {
  signUp,
  signIn,
  getAllUsers,
  sendOTP,
} from "../controllers/auth_controller.js";
import { verifyToken } from "../middleware/middleware.js";

const router = express.Router();

router.post("/", signUp);
router.get("/", signIn);

router.get("/users", verifyToken, getAllUsers);
router.post("/otp", sendOTP);

export default router;
