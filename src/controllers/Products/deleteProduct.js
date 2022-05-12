const Product = require("../../models/Product.js");

//Funcion para eliminar un producto
const deleteProduct = async (req, res, next) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (product) {
            if (product.dataValues.active === false) {
                return res.status(400).send("El producto ya fue eliminado.")
            }
        }

        const updateActive = await Product.update({
            active: false,
        }, {
            where: {
                id
            }
        });
        if (updateActive[0] !== 0) {
            return res.status(200).send("Producto eliminado correctamente.")
        } else {
            return res.status(400).send("Producto no encontrado.")
        }
    } catch (error) {
        next(error);
    }
}
module.exports = deleteProduct;
