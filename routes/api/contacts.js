const express = require('express');

const { validation, paramValidation, isValidId, validationFavorite } = require('../../middalwares/validation');
const { contactSchema, schemaId, updateFavoriteSchema } = require('../../schemasValidation/schemasValidation');

const validateMiddalware = validation(contactSchema);
const validateMiddalwareId = paramValidation(schemaId);
const validateMiddalwareFavorite = validationFavorite(updateFavoriteSchema);



const {getAll, getOneContact, addContact, deleteContact, updateContacts, updateFavorite } = require('../../controllers/contactProcessing');

const router = express.Router()

router.get('/', getAll)

router.get('/:contactId',isValidId, getOneContact);

router.post('/', validateMiddalware, addContact);

router.delete('/:contactId', isValidId, deleteContact);

router.put('/:contactId', isValidId, validateMiddalwareId, updateContacts);

router.patch('/:contactId/favorite', isValidId, validateMiddalwareFavorite, updateFavorite)


module.exports = router



