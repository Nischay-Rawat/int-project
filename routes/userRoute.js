const express = require('express');
const { createUser, updateUser, getUsers } = require('../controllers/userController');
const { authenticate } = require('../middlewares/auth.js');
const router = express.Router();

router.post('/users', authenticate, createUser);
router.put('/users/:id', authenticate, updateUser);
router.get('/users', authenticate, getUsers);

module.exports = router;
