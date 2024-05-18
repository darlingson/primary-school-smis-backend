const User = require("../models/userModel");

const { createSecretToken } = require("../utils/generateToken");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    if (
      !(
        req.body.email &&
        req.body.password &&
        req.body.name &&
        req.body.username &&
        req.body.role
      )
    ) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email: req.body.email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    const salt = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role
    });
    
    const user = await newUser.save();
    const userIdString = user._id.toString();
    console.log("user created", userIdString);
    const token = createSecretToken(userIdString);

    res.cookie("token", token, {
      path: "/", 
      expires: new Date(Date.now() + 86400000),
      secure: true,
      httpOnly: true,
      sameSite: "None",
    });

    console.log("cookie set succesfully");

    res.json(user);
  } catch (error) {
    console.log("Gott an error", error);
  }
};
module.exports = createUser;