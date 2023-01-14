const validation = require('./validation');
const paramValidation = require('./paramValidation');
const isValidId = require('./validateId');
const validationFavorite = require('./validationFavorite');
const authenticate = require('./authenticate');
const upload = require('./upload')


module.exports = {
  validation,
  paramValidation,
  isValidId,
  validationFavorite,
  authenticate,
  upload,
}