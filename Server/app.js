import express from "express";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";

import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'

const app = express();

// morgan middleware
app.use(morgan("tiny"))

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true,}))
app.use(cors())


// cookies and file middlewares
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))


// Routing Middlewares
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);


export default app;
