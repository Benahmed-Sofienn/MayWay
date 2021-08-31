// require mongoose
const mongoose = require("mongoose");

// connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {}
};
module.exports = connectDB;
