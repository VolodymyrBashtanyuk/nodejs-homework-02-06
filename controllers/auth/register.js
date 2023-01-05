const bcryptjs = require('bcryptjs');

const User = require('../../modules/user');

const createError = require('http-errors');

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email)
        const userEmail = await User.findOne({email});
        if (userEmail) {
            throw createError(401, 'Email in use');
        };

        const hashPassword = await bcryptjs.hash(password, 10);
 
        const newUser = await User.create({...req.body, password: hashPassword});

        res.json({
            status: "Created",
            code: 201,
            message: "New user created",
            user: {
                email: newUser.email,
                subscription: newUser.subscription,
            }
        })
    } catch (error){
        next(error)
        
    }
};

module.exports = register;