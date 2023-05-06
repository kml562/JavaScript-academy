import express from "express";
import { globalmid } from "../middleware/globmid.js";
import { userController } from "../controller/users.js";

const router= express.Router();


router.get('/createuser',globalmid,userController )



export default router;