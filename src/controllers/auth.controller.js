import User from "../models/User";

import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  try {
    // Getting the Request Body
    const { username, email, password, role } = req.body;
    // Creating a new User Object
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    if (req.body.role) {
        newUser.role = req.body.role
      
    } else {
       newUser.role = "user";
    }

    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const signin = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    );

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
