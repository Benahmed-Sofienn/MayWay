// require express
const express = require("express");

// instance of express
const app = express();

// require and config dotenv
require("dotenv").config();

// connect to DB
const connectDB = require("./config/connectDB");
connectDB();

// global middleware
app.use(express.json())

//router
app.use('/api/user', require('./routes/user'))



// port
const port = process.env.PORT;

// create server
app.listen(port, (error) =>
  error
    ? console.log("Can not run server !!!")
    : console.log(`Server is running on port ${port} ...`)
);


console.clear()
