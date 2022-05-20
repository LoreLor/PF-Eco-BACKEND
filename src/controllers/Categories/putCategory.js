const Category = require("../../models/Category.js");

const putCategory = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    try {

        const updateCategory = await Category.update({
            name,
        }, {
            where: {
                id
            }
        });

        if (updateCategory[0] !== 0) {
            res.status(201).json({
            msg: "Category updated",
            name: updateCategory.name,});
        } else {
            res.status(400).send("Category not found")
        }

    } catch (err) {
        next(err)
    }
}

module.exports = putCategory;