const express = require('express');

const { register } = require('../../controllers/auth')

const router = express.Router();

router.post('/users/signup', register);

module.exports = router;
