const User = require('../../modules/user');

const createError = require('http-errors');

const register = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email)
        const userEmail = await User.findOne({email});
        if (userEmail) {
            throw createError(409, 'Email in use');
        }

        const newUser = await User.create(req.body);
        console.log(newUser)
        // console.log(newUser.subscription)

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