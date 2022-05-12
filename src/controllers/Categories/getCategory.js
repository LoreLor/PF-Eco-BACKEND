const Category = require("../../models/Category.js");
const Product = require("../../models/Product.js");

const normalizeString = require("../../utils/normalizeString.js");

const getCategory = async (req, res, next) => {
    try {

        const searchCategory = await Category.findOne({
            where: {
                name: normalizeString(req.params.name),
            }
        })

        if (!searchCategory) {
            return res.status(404).json({
                message: "Category not found"
            })
        } else {
            const categoryProducts = await Category.findOne({
                where: {
                    name: normalizeString(req.params.name),
                },
                include: [{
                    model: Product,
                    atributes: ["name", "description", "price", "image", "category"],
                    through: {
                        attributes: []
                    }
                }]
            })
            res.status(200).send(categoryProducts)
        }

    } catch (err) {
        next(err)
    }
}

module.exports = getCategory;