import express from "express";
import { signUp,login,logout,getAllUsers,getSingleUser, getAllUser } from "../controllers/user.js";

const router= express.Router();


router.get("/test", function (req, res) {
    res.send({ send: "hello world!" });
})
router.get("/name",getAllUser)
router.get('/user/:id', getSingleUser)
router.post('/signup', signUp)
router.post('/login', login)
router.get('/logout', logout)

router.get('/getAllUsers', getAllUsers)




export default router;

