require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id,email) => {
  return jwt.sign({ id,email, }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};