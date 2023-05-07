import express from "express";
import { signUp,login,logout,getAllUsers } from "../controllers/user.js";

const router= express.Router();

router.post('/signup', signUp)
router.post('/login', login)
router.get('/logout', logout)

router.get('/getAllUsers', getAllUsers)


export default router;

