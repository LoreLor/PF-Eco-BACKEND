const Product = require("../../models/Product.js");

//Funcion para eliminar un producto
const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            res.status(200).send("Producto eliminado");
        } else {
            res.status(404).send("Producto no encontrado");
        }
    } catch (error) {
        next(error);
    }
}
module.exports = deleteProduct;
