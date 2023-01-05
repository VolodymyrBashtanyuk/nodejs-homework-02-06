const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../modules/user');

const createError = require('http-errors');

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({email});
        if (!user) {
            throw createError(401, 'Email or password is wrong');
        };

        const checkPassword = await bcryptjs.compare(password, user.password);
        if (!checkPassword) {
            throw createError(401, 'Email or password is wrong');
            
        };

        const payload = {
            id: user._id,
        }

        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '12h'})
 

        res.json({
            status: "ok",
            code: 200,
            token,
            user: {
                email: user.email,
                subscription: user.subscription,
            }
        })
    } catch (error){
        next(error)
        
    }
};

module.exports = login;