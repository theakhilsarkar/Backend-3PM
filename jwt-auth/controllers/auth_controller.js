import { Auth } from "../model/auth_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { transporter } from "../helper/email_sender.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 15);
    const user = await Auth.create({ email, name, password: hashedPassword });
    res.json({ status: true, message: "Signup successfully !", user });
  } catch (err) {
    res.json({
      status: false,
      message: "Signup failed !",
      err: err.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    // 1. check user is exist or not.
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign(
          { name: user.name, email: user.email },
          "~!@#$%^&*()",
          {
            expiresIn: "1h",
          },
        );
        res.cookie("token", token, {
          maxAge: 1000 * 60 * 60,
        });
        res.json({
          status: true,
          message: "Signin successfully !",
        });
      } else {
        res.json({ status: false, message: "Password incorrect !" });
      }
    } else {
      res.json({ status: false, message: "Account not exist, Signup first !" });
    }
  } catch (err) {
    res.json({
      status: false,
      message: "Signin failed !",
      err: err.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await Auth.find();
    res.json({
      status: true,
      message: "user fetched successfully !",
      users,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "Cant find user..",
      err: err.message,
    });
  }
};

// features -> request token 10 controller

export const sendOTP = async (req, res) => {
  try {
    const { to, text, subject } = req.body;

    await transporter.sendMail({
      from: `"Placement Drive" <${process.env.EMAIL}>`,
      to,
      subject,
      text,
    });

    res.json({
      status: true,
      message: "OTP Sent successfully !",
    });
  } catch (err) {
    res.json({
      status: false,
      message: "cant send otp !",
      err: err.message,
    });
  }
};
