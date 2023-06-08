import User from "../model/user.js";
import BigPromise from "../middleware/bigPromise.js";
import CustomError from "../utils/customError.js";
import { cookieToken } from "../utils/cookieToken.js";
import * as dotenv from "dotenv";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
} from "../utils/validation/validatior.js";
dotenv.config();

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !name || !password) {
      return res
        .status(400)
        .json({ message: "Invalid name, email, or password" });
    }

    // All the validation using regex-----------------------------------------------------------------
    // Name validation--------------------------------------------------------------------------------
    console.log(name)
    if (!isValidName(name)) {
      console.log("first")
      return res.status(400).json({ message: "Invalid name" });
    }

    // Email validation---------------------------------------------------------------------------------
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // Password validation------------------------------------------------------------------------------
    if (!isValidPassword(password)) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const user = await User.create({ name, email, password });
    cookieToken(res, user);
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: "You are not registered" });
    }

    const isUserValidated = user.isValidatedPassword(password);

    if (!isUserValidated) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Email validation------------------------------------------------------------------------------------
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    // Password validation------------------------------------------------------------------------------
    if (!isValidPassword(password)) {
      return res.status(400).json({ message: "Please enter a valid password" });
    }
    
    cookieToken(res, user);
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const logout = BigPromise(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({ success: true, message: "Logout Success" });
});

export const getAllUsers = BigPromise(async (req, res, next) => {
  const allUsers = await User.find();

  res.status(200).json({ success: true, users: allUsers });
});





