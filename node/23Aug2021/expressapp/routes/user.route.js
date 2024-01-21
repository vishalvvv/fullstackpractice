var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user.controller');

router.post("/user", UserController.addUser);

module.exports = router;