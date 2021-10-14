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
<<<<<<< HEAD
  imgLink: {
    type: String,
    required: true,
  },
=======
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  adresse: {
    type: String,
    
  },
  lastName: {
    type: String,
    
  },
  number: {
    type: String,
    
  },
  age: {
    type: String,
    
  },
  sexe: {
    type: String,
    
  },
  country: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
=======
  phone: Number,
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9
});

module.exports = User = mongoose.model("user", userSchema);
