const express = require('express');

const { register, login, getCurrent, logout, updateAvatar, verifyUser, resendVerifyEmail } = require('../../controllers/auth')

const { validation, authenticate, upload } = require('../../middalwares');
const { loginSchema, registrationSchema, emailVerifyShema } = require('../../schemasValidation');

const validateLogin = validation(loginSchema);
const validateSignin = validation(registrationSchema);
const validateEmail = validation(emailVerifyShema);


const router = express.Router();

router.post('/users/signup', validateSignin, register);

router.get('/users/verify/:verificationToken', verifyUser);

router.post('/users/verify', validateEmail, resendVerifyEmail);



router.post('/users/login', validateLogin, login);

router.get('/users/current', authenticate, getCurrent);

router.post('/users/logout', authenticate, logout);

router.patch('/users/avatars', authenticate, upload.single('avatar'), updateAvatar);


module.exports = router;
