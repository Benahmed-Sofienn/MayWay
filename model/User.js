// require mongoose
const mongoose = require("mongoose");

//Schema
const { Schema } = mongoose;

// create userSchema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: Number,
});

module.exports = User = mongoose.model("user", userSchema);
