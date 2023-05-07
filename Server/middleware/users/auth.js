import { JsonWebToken } from "jsonwebtoken";
import {dotenv } from "dotenv";

dotenv.config();


export const auth= async(req,res,next)=>{
try {
    const token = req.headers.authorization;
    if (token) {
        const decoded = jwt.verify(token, process.env.secretKey);
    
        if (decoded) {
          req.body.userID = decoded.userID;
          next();
        } else {
          res.status(400).json({ message: "Please login first" });
        }
      } else {
        res.status(400).json({ message: "Please login first" });
      }
} catch (error) {
    res.status(400).json({message: error.message});
}
}