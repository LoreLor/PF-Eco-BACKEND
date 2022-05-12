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

        if(updateCategory[0] !== 0) {
            res.status(200).send("Se a actualizado a: " + name);
        } else {
            res.status(400).send("Categoria no encontrada.")
        }

    } catch (err) {
        next(err)
    }
}

module.exports = putCategory;