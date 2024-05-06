import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json(`User created successfully`);
  } catch (error) {
    next(error);
  }
};
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validuser = await User.findOne({ email });
      if (!validuser) {
        return next(errorHandler("404", "User not found"));
      }
      const validpassword = bcrypt.compareSync(password, validuser.password);
      if (!validpassword) {
        return next(errorHandler("404", "wrong credentials"));
      }
      const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validuser._doc;
      res.cookie("access_token", token, { httpOnly: true }).status(200).json(rest);
  
    } catch (error) {
      next(error);
    }
  };