require('dotenv').config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');

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
