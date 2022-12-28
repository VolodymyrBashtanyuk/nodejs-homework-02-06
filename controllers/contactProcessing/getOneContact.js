const Contact = require('../../modules/contact');

const createError = require('http-errors');


const getOneContact = async (req, res, next) => {

    try {
        const { contactId } = req.params;
        const oneContact = await Contact.findById(contactId);

        if (!oneContact) {
            throw createError(404, `Contact with id=${contactId} not found`)
        }
    
        res.json({
          status: "success",
          code: 200,
          data: {
           result: oneContact,
          }
        });

    } catch (error) {
        next(error)
    }
};

module.exports = getOneContact;