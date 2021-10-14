// require express
const express = require("express");
<<<<<<< HEAD
const {
  register,
  login,
  current,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  
} = require("../controllers/user.controllers"); //,transports

//require middlewares
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
const {
  registerValidator,
  validations,
  loginValidator,
} = require("../middleware/userValidator");
=======
const { register, login, current } = require("../controllers/user"); //,transports


//require middlewares
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/idAdmin")
const { registerValidator, validations, loginValidator } = require("../middleware/userValidator");
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

//require Router
const router = express.Router();

/**
 * @desc : register
 * @method: POST
 * @path: /register
 * @data: req.body
 */
<<<<<<< HEAD
router.post("/register", registerValidator(), validations, register);
=======
router.post('/register', registerValidator(),validations , register)
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

/**
 * @desc : login
 * @method: POST
 * @path: /login
 * @data: req.body
 */
<<<<<<< HEAD
router.post("/login", loginValidator(), validations, login);
=======
 router.post('/login',loginValidator(),validations, login)
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

/**
 * @desc : current user
 * @method: GET
 * @path: /current
 * @data: no
 */
<<<<<<< HEAD
router.get("/current", isAuth, current);

//dadad

/**
 * @desc : get all Users
 * @method: GET
 * @path : 'http://localhost:6000/api/users/'
 * @data : no
 */
router.get("/",  getAllUsers);



/**
 * @desc : get one client by id
 * @method: GET
 * @path : 'http://localhost:6000/api/users/:id'
 * @data : req.params.id
 */
router.get("/:_id", getOneUser);

/**
 * @desc : delete one client
 * @method: DELETE
 * @path : 'http://localhost:6000/api/users/:id'
 * @data : req.params.id
 */
router.delete("/:_id",  deleteOneUser);

/**
 * @desc : update client by id
 * @method: PUT
 * @path : 'http://localhost:6000/api/users/:id'
 * @data : req.params and req.body
 */
router.put("/:_id", updateOneUser);



=======
router.get('/current',isAuth, current)


/**
 * @desc : current user
 * @method: GET
 * @path: /transports
 * @data: no
//  */
//  router.get('/transport',isAuth,isAdmin, transports )
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

module.exports = router;
