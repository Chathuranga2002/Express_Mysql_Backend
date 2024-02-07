var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

/* GET users listing. */
router.post('/Login', loginController.loginUser);

module.exports = router;
