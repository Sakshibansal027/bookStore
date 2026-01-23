import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!email || !password || !fullname) {
      return res.status(400).send("All fields are required");
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exsists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });
    await createUser.save();
    res.status(201).json({ message: "User created successfully",user:{
        _id: createUser.id, 
        fullname: createUser.fullname, 
        email: createUser.email
    } });
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json({ message: "Interal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user.id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
