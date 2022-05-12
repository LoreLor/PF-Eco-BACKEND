const Category = require("../../models/Category");

const deleteCategory = async (req, res, next) => {
    let { id } = req.params;

    try {
        const category = await Category.findByPk(id);
        if (category) {
            if (category.dataValues.active === false) {
                return res.status(400).send("La categoría ya fue eliminada.")
            }
        }

        const updateActive = await Category.update({
            active: false,
        }, {
            where: {
                id
            }
        });
        if (updateActive[0] !== 0) {
            return res.status(200).send("Categoría eliminada correctamente.")
        } else {
            return res.status(400).send("Categoria no encontrada.")
        }
    } catch (error) {
        next(error)
    }
}


module.exports = deleteCategory;


