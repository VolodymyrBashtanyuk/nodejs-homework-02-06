const { User } = require('../../modules');

const createError = require('http-errors');


const verifyUser = async (req, res, next) => {
    try {
        const { verificationToken } = req.params;
        const user = await User.findOne({ verificationToken });
        if (!user) {
          throw createError(404);
         }
        await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: '' });

        res.json({
            status: "OK",
            code: 200,
            message: "Verification successful",
        })
    } catch (error){
          next(error);
    }
    
} 

module.exports = verifyUser;