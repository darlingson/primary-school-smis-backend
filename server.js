require('dotenv').config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

var User = require('./models/userModel');
var bodyParser = require('body-parser');
var jsonwebtoken = require('jsonwebtoken');

// Use the MONGODB_URI environmental variable
const MONGODB_URI = process.env.ATLAS_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  // Pass to next layer of middleware
  next();
});
//importing the routes
const authRoutes = require('./routes/auth');
const routes = require('./routes/routes');



app.use('/auth', authRoutes);
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Define routes and middleware
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
