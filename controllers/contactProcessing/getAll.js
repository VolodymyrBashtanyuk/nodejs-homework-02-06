const { Contact } = require('../../modules');


const getAll = async (req, res, next) => {
    try {
        const { _id: owner } = req.user;
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        const result = await Contact.find({owner},{}, {skip, limit});
        res.json(
            {
            status: "success",
            code: 200,
            data: {
                result,
            }
            }
        );
        
    } catch (error) {
        next(error)
    }
};

module.exports = getAll;