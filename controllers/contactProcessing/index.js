const getAll = require('./getAll');
const getOneContact = require('./getOneContact')
const addContact = require('./addContact');
const deleteContact = require('./deleteContact');
const updateContacts = require('./updateContacts');
const updateFavorite = require('./updateFavorite');

module.exports = {
    getAll,
    getOneContact,
    addContact,
    deleteContact,
    updateContacts,
    updateFavorite,
}