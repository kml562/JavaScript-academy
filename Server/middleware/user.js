import CustomError from "../utils/customError.js";
import User from "../model/user.js";
import BigPromise from "./bigPromise.js";
import jwt from "jsonwebtoken";

export const isLoggedIn = BigPromise(async (req, res, next) => {
  const token =
    req.cookies.token ||
    req.headers.authorization.split(" ")[1] ||
    req.header("Authorization")?.replace("Bearer ", " ");
  // const token = req.headers.authorization.split(" ")[1];---------------------

  if (!token)
    return next(new CustomError("Login first to access this page", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);


    const thisIsThatUser = await User.findById(decoded.id)

    // injucting new field(user) in req
    req.user = thisIsThatUser

    next()
})
