const Joi = require('joi');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const emailVerifyShema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
})

module.exports = emailVerifyShema;