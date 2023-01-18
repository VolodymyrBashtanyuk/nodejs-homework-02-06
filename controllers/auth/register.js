const bcryptjs = require('bcryptjs');
const gravatar = require('gravatar');
const {nanoid} = require('nanoid');

const { User } = require('../../modules');
const { sendEmail } = require('../../helpers');

const { BASE_URL } = process.env;

const createError = require('http-errors');

const register = async (req, res, next) => {
    try {
        const { email, password, verificationToken } = req.body;
        const userEmail = await User.findOne({email});
        if (userEmail) {
            throw createError(401, 'Email in use');
        };
        
        const hashPassword = await bcryptjs.hash(password, 10);

        const avatarURL = gravatar.url(email);
        const varificationCode = nanoid(10);
 
        const newUser = await User.create({...req.body, password: hashPassword, avatarUrl: avatarURL, verificationToken: varificationCode});

        const veryfiEmail = {
            to: email,
            subject: 'Verify You email',
            html: `<a target='_blank' href='${BASE_URL}/api/auth/users/verify/${verificationToken}'>Click verify email</a>`,
        }    

        await sendEmail(veryfiEmail);

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