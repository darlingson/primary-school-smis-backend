const mongoose = require('mongoose');

const schoolAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  school:{
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const SchoolAdmin = mongoose.model('SchoolAdmin', schoolAdminSchema);

module.exports = SchoolAdmin;
