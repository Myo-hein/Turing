var express = require('express');
var router = express.Router();
const userController = require('../controller/UserController');

/* GET users listing. */
router.get('/:userID', userController.getUserByID);
router.post('/', userController.register);
router.post('/login', userController.login);

module.exports = router;
