const express = require("express");
const UserModel = require("../../model/users/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const userRouter = express.Router();


export  const createUser = async () => {
  const { email, password, name } = req.body;
  try {
    // const emailExisted = await UserModel.findOne({ email: email });
    // if (emailExisted) {
    //   res.status(400).json({ message: "Email already exists" });
    // } else {}
      bcrypt.hash(password, 4, async (err, hash) => {
        const userdata = {
          email,
          password: hash,
          name,
        };
      });
      const UserModel = await new UserModel(userdata).save();
      res.status(200).json({ message: "Registration successful" });
    
  } catch (error) {
    res.status(400).json(error.message);
  }
};
