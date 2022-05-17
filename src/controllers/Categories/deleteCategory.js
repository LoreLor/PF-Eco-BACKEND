const Category = require("../../models/Category");
const Product = require("../../models/Product");

const deleteCategory = async (req, res, next) => {
    let { id } = req.params;
    try {
        let category = await Category.findByPk(id, {
            include: [{
                model: Product,
                atributes: ["id", "name"],
                through: {
                    attributes: []
                }
            }]
        })
        
        if(category.dataValues.products.length > 0) {
            res.status(400).send(`La categoría tiene ${category.dataValues.products.length} productos asignados, no es posible eliminarla.
            Por favor, elimine los productos pertenecientes a la categoria.`)
        } else {
            let eliminadas = await Category.destroy({
                where: {
                    id
                }
            });
            res.status(200).send(`Se eliminó ${eliminadas} categoría.`)
        }


    } catch (error) {
        next(error)
    }
}


module.exports = deleteCategory;