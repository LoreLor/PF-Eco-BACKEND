const Category = require("../../models/Category.js");

const getCategories = async (req, res, next) => {
    try {
        const allCategories = await Category.findAll(
            {
                where:
                {
                    active: true,
                }
            },
            {
                attributes: ["id", "name", "active"]
            });
        res.status(200).send(allCategories);
    } catch (error) {
        next(error);
    }
}

module.exports = getCategories;

