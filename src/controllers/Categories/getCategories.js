const Category = require("../../models/Category.js");
const Product = require("../../models/Product.js");

const getCategories = async (req, res, next) => {
    try {
        const allCategories = await Category.findAll(
            {
                attributes: ["id", "name"],
                include : [{model:Product}]

            });
        res.status(200).send(allCategories);
    } catch (error) {
        next(error);
    }
}

module.exports = getCategories;

