const contactSchema = require('./schemasValidation');
const schemaId = require('./schemaId');
const updateFavoriteSchema = require('./updateFavoriteSchema');
const registrationSchema = require('./registrationShema');
const loginSchema = require('./loginSchema');
const emailVerifyShema = require('./emailVerifyShema');

module.exports = {
  contactSchema,
  schemaId,
  updateFavoriteSchema,
  registrationSchema,
  loginSchema,
  emailVerifyShema,
}