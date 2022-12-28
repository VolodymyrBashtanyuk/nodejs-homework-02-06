const Contact = require('../../modules/contact');


const createError = require('http-errors')


const updateContacts = async(req, res, next) => {
    try {
        const {contactId} = req.params;
        const updateResult = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
        if(!updateResult){
          throw createError(404, "Not found")
        }
        res.json({
          status: "success",
            code: 200,
          message: "contact updated",
          data: {
            result: updateResult
          }
        });
      } catch (error) {
        next(error)
    }
}

module.exports = updateContacts;