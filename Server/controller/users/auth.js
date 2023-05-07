const express = require("express");
const UserModel = require("../../model/users/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

export const loginUsers = async (req, res) => {
    const {email, password} = req.body
    try {
        const user= await UserModel.findOne({email: email});
        bcrypt.compare(password, user.password, async (err, result) => {
        if(result){
            res.status(200).json({
                message:"Login successful",
                userID:user._id,
                token: jwt.sign({ userID:user._id},process.env.secretKey),
        
        
        });
        } else{
            res.satus(400).json({message:"Login failed"})
        }
        })

        
    } catch (error) {
        res.satus(400).json({ message: error.message });
    }
};




// userRouter.post("/login", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const user = await UserModel.find({ username: username });
//       if (user.length > 0) {
//         bcrypt.compare(password, user[0].password, async (err, result) => {
//           if (result) {
//             res.status(200).send({
//               message: "Login successful",
//               userID: user[0]._id,
//               // Generating the jwt token
//               token: jwt.sign({ userID: user[0]._id }, process.env.secretKey),
//             });
//           } else {
//             res.status(400).send({ message: "Invalid password" });
//           }
//         });
//       } else {
//         res
//           .status(400)
//           .send({ message: "User not found! Please creat an account" });
//       }
//     } catch (err) {
//       res.status(400).send({ message: err.message });
//     }
//   });
  





  ///// pre hook mongoose;