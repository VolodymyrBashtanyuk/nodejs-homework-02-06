const express = require('express');

const { register, login, getCurrent, logout, updateAvatar } = require('../../controllers/auth')

const { validation, authenticate, upload } = require('../../middalwares');
const { loginSchema, registrationSchema } = require('../../schemasValidation');

const validateLogin = validation(loginSchema);
const validateSignin = validation(registrationSchema);


const router = express.Router();

router.post('/users/signup', validateSignin, register);

router.post('/users/login', validateLogin, login);

router.get('/users/current', authenticate, getCurrent);

router.post('/users/logout', authenticate, logout);

router.patch('/users/avatars', authenticate, upload.single('avatar'), updateAvatar);


module.exports = router;
