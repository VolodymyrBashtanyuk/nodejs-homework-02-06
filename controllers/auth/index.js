const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');
const verifyUser = require('./verifyUser');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    updateAvatar,
    verifyUser,
    resendVerifyEmail,
};