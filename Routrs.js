const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/users', userController.insertUser);
router.get('/users', userController.getUsers);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
