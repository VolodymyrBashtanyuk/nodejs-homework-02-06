const express = require('express');

const { register, login } = require('../../controllers/auth')

const router = express.Router();

router.post('/users/signup', register);

router.post('/users/login', login);


// /users/login

module.exports = router;
