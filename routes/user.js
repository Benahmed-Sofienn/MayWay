// require express
const express = require("express");
const { register, login, current } = require("../controllers/user"); //,transports


//require middlewares
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/idAdmin")
const { registerValidator, validations, loginValidator } = require("../middleware/userValidator");

//require Router
const router = express.Router();

/**
 * @desc : register
 * @method: POST
 * @path: /register
 * @data: req.body
 */
router.post('/register', registerValidator(),validations , register)

/**
 * @desc : login
 * @method: POST
 * @path: /login
 * @data: req.body
 */
 router.post('/login',loginValidator(),validations, login)

/**
 * @desc : current user
 * @method: GET
 * @path: /current
 * @data: no
 */
router.get('/current',isAuth, current)


/**
 * @desc : current user
 * @method: GET
 * @path: /transports
 * @data: no
//  */
//  router.get('/transport',isAuth,isAdmin, transports )

module.exports = router;
