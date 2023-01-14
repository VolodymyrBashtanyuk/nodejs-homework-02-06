const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const { User } = require('../modules');


const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const { authorization } = req.headers;
    const [bearer, token] = authorization.split(' ');
    if (bearer !== 'Bearer') {
        next(createError(401))
    };
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        
        if (!user || !user.token) {
        next(createError(401))
            
        };
        req.user = user;
        next();
    } catch {
        next(createError(401))
    }

}

module.exports = authenticate;