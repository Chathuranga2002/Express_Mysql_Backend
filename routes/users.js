var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.post('/save', userController.saveUser);
router.post('/Login', userController.loginUser);
router.put('/update/:id', userController.updateUser);
router.get('/getAll', userController.getAllUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/find/:id', userController.findUser);

module.exports = router;
