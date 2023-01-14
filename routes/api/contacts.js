const express = require('express');

const { validation, paramValidation, isValidId, validationFavorite, authenticate } = require('../../middalwares');
const { contactSchema, schemaId, updateFavoriteSchema } = require('../../schemasValidation');

const validateMiddalware = validation(contactSchema);
const validateMiddalwareId = paramValidation(schemaId);
const validateMiddalwareFavorite = validationFavorite(updateFavoriteSchema);



const {getAll, getOneContact, addContact, deleteContact, updateContacts, updateFavorite } = require('../../controllers/contactProcessing');

const router = express.Router()

router.get('/', authenticate, getAll)

router.get('/:contactId',authenticate, isValidId, getOneContact);

router.post('/', authenticate, validateMiddalware, addContact);

router.delete('/:contactId', authenticate, isValidId, deleteContact);

router.put('/:contactId', authenticate, isValidId, validateMiddalwareId, updateContacts);

router.patch('/:contactId/favorite', authenticate, isValidId, validateMiddalwareFavorite, updateFavorite)


module.exports = router;



