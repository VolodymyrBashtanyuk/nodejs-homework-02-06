
const Contact = require('../../modules/contact');


const addContact = async(req, res, next) => {
  try {
      const newContact = await Contact.create(req.body);
      res.json({
        status: "success",
          code: 201,
          message: "New contact created",
        data: {
          result: newContact
        }
      });
    } catch (error) {
      next(error)
  }
}
module.exports = addContact;
