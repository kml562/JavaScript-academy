import express from "express";
import { globalmid } from "../../middleware/global/globmid.js";
import { userController } from "../../controller/users/users.js";

const router= express.Router();


router.get('/createuser',globalmid,userController )



export default router;


/*userRouter.post("/register", async (req, res) => {
  const { email, password, username, score, level } = req.body;
  try {
    const emailExisted = await UserModel.find({ email: email });
    if (emailExisted.length > 0) {
      return res.status(400).send({ message: "Email already exists" });
    }

    bcrypt.hash(password, 4, async (err, hash) => {
      const payload = {
        email,
        password: hash,
        username,
        score: 0,
        level: 0,
      };
      const user = new UserModel(payload);
      await user.save();
      res.status(200).send({ message: "Registration successful" });
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});*/