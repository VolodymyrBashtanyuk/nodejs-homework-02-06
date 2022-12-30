const createError = require('http-errors');
const { isValidObjectId } = require('mongoose');


const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    throw createError(404, "Invalid id");
  }
  next()
};

module.exports = isValidId;