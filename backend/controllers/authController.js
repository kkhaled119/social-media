import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

const Signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    next(errorHandler);
  }
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    userName,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json(" Signup successful");
  } catch (ereor) {
    next(ereor);
  }
};

export default Signup;
