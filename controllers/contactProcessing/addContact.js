
const { Contact } = require('../../modules');


const addContact = async(req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const newContact = await Contact.create({ ...req.body, owner });
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
