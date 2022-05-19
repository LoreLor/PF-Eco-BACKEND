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
            res.status(200).json({msg:`Imposible to delete`})
        } else {
            let deleted = await Category.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({msg:`Category deleted`})
        }


    } catch (error) {
        next(error)
    }
}


module.exports = deleteCategory;