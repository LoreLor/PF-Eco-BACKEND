const Category = require("../../models/Category.js");
const { types } = require("./arrayCategories");

const getCategories = async (req, res, next) => {
    try {
        const allCategories = await Category.findAll({
            attributes: ["name"]
        });
        res.status(200).send(allCategories);
        
/*         types.forEach(async n => {
            await Category.findOrCreate({
                where: {
                    name: n
                }
            })
        });
        const categories = await Category.findAll();
        res.status(200).send(categories); */
    } catch (error) {
        next(error);
    }
}

module.exports = getCategories;

