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






export const signUp = BigPromise(async (req, res, next) => {
  const { name, email, password,socialmedia } = req.body;


  if (!email || !name || !password) {
    return next( new CustomError("Name Email & Password are required fields", 400) );}

    if (!isValidEmail(email)) {
        return next(new CustomError("Please enter a valid email", 400));
  }
  
  // if (!isValidPassword(password))return next(new CustomError("Please enter a valid password", 400));
    
  
  const user = await User.create(req.body);



  cookieToken(res, user);
});


//     try { const { name, email, password } = req.body;
  
//     if (!email || !name || !password) {return res.status(400).json({ message: 'Invalid name email or password' })
// }
//    // all the validation using regex-----------------------------------------------------------------
//     //name validation--------------------------------------------------------------------------------
//     if (!isValidName(name)) {
//         return res.status(400).json({ message: 'Invalid name' });
//       }       
//      //email validation---------------------------------------------------------------------------------
//         if (!isValidEmail(email))
//             return res.status(400).json({ message: 'Invalid email' });
//    // password validation------------------------------------------------------------------------------
//    if (!isValidPassword(password))
//      return res.status(400).json({ message: 'Invalid password' });
//   const user = await User.create({ name, email, password });
//   cookieToken(res, user);  
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }});
  

// export const login = BigPromise(async (req, res, next) => {
//   const { email, password } = req.body;

//   if (!email || !password)
//     return next(new CustomError("Please Provide Email & Password", 400));

//   const user = await User.findOne({ email }).select("+password");

//   if (!user) return next(new CustomError("You are not registered", 400));

//   const isUserValidated = user.isValidatedPassword(password);

//   if (!isUserValidated) {
//     return next(new CustomError("Invailed Password", 400));
//   }
//   //email validation------------------------------------------------------------------------------------
//   if (!isValidEmail) {
//     return next(new CustomError("Please enter a valid email", 400));
//   }
//   // password validation------------------------------------------------------------------------------
//   if (!isValidPassword(password)) {
//     return next(new CustomError("Please enter a valid password", 400));
//   }

//   cookieToken(res, user);
// });

export const login = BigPromise(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(new CustomError("Please Provide Email & Password", 400));

    const user = await User.findOne({ email }).select("+password");
 
    if (!user) return next(new CustomError("You are not registered", 400));

    // const isUserValidated = user.isValidatedPassword(password);

    // if (!isUserValidated) {
    //     return next(new CustomError("Invailed Password", 400));
    // }
    //email validation------------------------------------------------------------------------------------
    if (!isValidEmail(email)) {
        return next(new CustomError("Please enter a valid email", 400));
    }
    // password validation------------------------------------------------------------------------------
    // if (!isValidPassword(password)) {
    //     return next(new CustomError("Please enter a valid password", 400));
    // }

    cookieToken(res, user);
});

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

export const getSingleUser = BigPromise(async (req, res, next) => {
  const {id} = req.params
  console.log(id)
  const user = await User.findById(id);

  res.status(200).json({ success: true, user: user });
});



