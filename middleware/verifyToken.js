require('dotenv').config({ path: './config.env' });
const jwt = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log(authHeader.split(" ")[1]);
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send("Token required");
    }
  
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    //   console.log(jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDg3NzAxYjViZGM4YmExODI5NjA3OSIsImlhdCI6MTcxNjAyNTY2NywiZXhwIjoxNzE2Mjg0ODY3fQ.Fb0ZmDIbTfi7jespHQDtSRP_3L7lVCkD6D_UB8etsYg",process.env.TOKEN_KEY))
      res.locals.token = token;
      res.locals.decoded = decoded;
      next();
    } catch (error) {
      console.log(error);
      res.status(403).send("Invalid token");
    }
  };
  module.exports = authenticateToken;