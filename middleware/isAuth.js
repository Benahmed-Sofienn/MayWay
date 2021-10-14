const user = require("../model/user");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    // test token
<<<<<<< HEAD
    const token = await req.headers["authorization"];
   
=======
    const token = req.headers["authorization"];
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9
    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: "You are not authorized !!!" }] });
    }

    // decode token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
<<<<<<< HEAD
    // console.log(decoded); // {id: }
=======
    console.log(decoded); // {id: }
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

    // fetch user with this id
    const userToFind = await User.findOne({ _id: decoded.id });
    if (!userToFind) {
      return res
        .status(401)
        .send({ errors: [{ msg: "You are not authorized !!" }] });
    }
    req.user = userToFind;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "You are not authorized !" }] });
  }
};

module.exports = isAuth;
