const createError = require('http-errors');

const paramValidation = (schema) => {

  return (req, res, next) => {

    const { error } = schema.validate(String (req.params.contactId));
    if (error) {
      throw createError(400, "Bad id")
    }
    next();
  };
};

module.exports = paramValidation;