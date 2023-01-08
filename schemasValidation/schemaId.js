const Joi = require('joi');

const schemaId = Joi.string().min(1);

module.exports = schemaId;