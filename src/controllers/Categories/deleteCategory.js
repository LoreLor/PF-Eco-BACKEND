const Category = require("../../models/Category");

const deleteCategory = async (req, res, next) => {
    let { id } = req.params;
    try {
        res.json(await Category.destroy({
            where: {
                id
            }
        }));
    } catch (error) {
        next(error)
    }
}


module.exports = deleteCategory;