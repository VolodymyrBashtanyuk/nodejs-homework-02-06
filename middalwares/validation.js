
const createError = require('http-errors');
const { isValidObjectId } = require('mongoose');

const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw createError(400, "missing required field");
    }
    next();
  };
};

const paramValidation = (schema) => {

  return (req, res, next) => {

    const { error } = schema.validate(String (req.params.contactId));
    if (error) {
      throw createError(400, "Bad id")
    }
    next();
  };
};

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    throw createError(404, "Invalid id");
  }
  next()
};

const validationFavorite = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw createError(400, "missing field favorite");
    }
    next();
  };
};

module.exports = {
  validation,
  paramValidation,
  isValidId,
  validationFavorite,
}