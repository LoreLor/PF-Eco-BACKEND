const Cart = require("../../models/Cart.js");
const Product = require("../../models/Product.js");
const User = require("../../models/User.js");
const Detail = require("../../models/Detail.js");

const deleteProduct = async (req, res, next) => {
  try {
    const { userId, productId } = req.query;

    const productInCart = await Cart.findOne({
      where: { userId: userId },
      include: { model: Detail },
    });

    if (!productInCart) {
      res.send("El producto no se encuentra en el carrito");
    } else {
      const deleteDetail = await Detail.destroy({
        where: { productId: productId },
      });

      res.status(200).json({
        message: "Producto eliminado del carrito",
        data: deleteDetail,
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = deleteProduct;
