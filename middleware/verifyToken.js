require('dotenv').config({ path: './config.env' });
const jwt = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send("Token required");
    }
  
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      res.locals.token = token;
      res.locals.decoded = decoded;
      next();
    } catch (error) {
      console.log(error);
      res.status(403).send("Invalid token");
    }
  };
  module.exports = authenticateToken;