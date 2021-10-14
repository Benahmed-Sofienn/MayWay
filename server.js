
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
<<<<<<< HEAD

//router
app.use('/api/user', require('./routes/user'))
app.use('/api/comments', require('./routes/comment'))
app.use('/api/transports', require('./routes/transport'))
app.use('/api/bann', require('./routes/bann'))

=======
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

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


<<<<<<< HEAD
console.clear()
=======
console.clear()
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9
