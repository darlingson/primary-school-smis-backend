const express = require('express');
const router = express.Router();
const createUser = require("../controllers/signupController");
const login = require("../controllers/loginController");
router.post("/signup", createUser);
router.post("/login", login);
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});
module.exports = router;