const { User } = require('../../modules');
const { sendEmail } = require('../../helpers');

const createError = require('http-errors');
const { BASE_URL } = process.env;



const resendVerifyEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user || user.verify) {
            throw createError(400, 'Verification has already been passed')
        };
        
          const veryfiEmail = {
            to: email,
            subject: 'Verify You email',
            html: `<a target='_blank' href='${BASE_URL}/api/auth/users/verify/${user.verificationToken}'>Click verify email</a>`
        }
        await sendEmail(veryfiEmail);
        
        res.json({
            status: "ok",
            code: 200,
            message: "Verification email send",
        })

    } catch (error) {
        next(error)
    }
}

module.exports = resendVerifyEmail;