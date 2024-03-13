const mongoose = require("mongoose");
const connect = mongoose.connect(
  "mongodb+srv://samuel8:t4ImxkPNMXAhIrLt@users-nodejs.eyxgrp5.mongodb.net/test"
);

// Chek database connected or not
connect
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database not connected");
  });

//   Create a Schema

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});


// Model or collection part
const collection = new mongoose.model("users-login", loginSchema);

module.exports = collection;