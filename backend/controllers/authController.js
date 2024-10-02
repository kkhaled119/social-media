import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const Signup = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({ message: "All fail are required" });
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
    res.status(500).json({ message: ereor.message });
  }
};

export default Signup;
