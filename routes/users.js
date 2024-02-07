var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middelwere/authenticateToken');

/* GET users listing. */
router.post('/save',auth, userController.saveUser);
router.post('/Login',auth, userController.loginUser);
router.put('/update/:id',auth, userController.updateUser);
router.get('/getAll',auth, userController.getAllUser);
router.delete('/delete/:id',auth, userController.deleteUser);
router.get('/find/:id',auth, userController.findUser);

module.exports = router;
