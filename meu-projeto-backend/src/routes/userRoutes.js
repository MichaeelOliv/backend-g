const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

router.get('/:id', userController.getUser);
router.post('/register', userController.createUser);
router.post('/login', authController.login);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;