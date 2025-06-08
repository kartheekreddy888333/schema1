const mongoose = require('mongoose');

// Profile sub-schema
const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
}, { _id: false });

// Main User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures uniqueness
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures uniqueness
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String], // Array of strings
    default: ['user'], // Default role
  },
  profile: ProfileSchema, // Embedded profile document
  lastLogin: {
    type: Date,
  },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

// Exporting model
module.exports = mongoose.model('User', UserSchema);
