import express from "express";
import userRouter from "./routes/user.js";
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/user", userRouter);

export default app;
