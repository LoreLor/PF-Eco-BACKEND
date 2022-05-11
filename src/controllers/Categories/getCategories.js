const Category = require("../../models/Category.js");

const getCategories = async (req, res, next) => {
    try {
        const allCategories = await Category.findAll({
            attributes: ["id","name"]
        });
        res.status(200).send(allCategories);
    } catch (error) {
        next(error);
    }
}

module.exports = getCategories;

