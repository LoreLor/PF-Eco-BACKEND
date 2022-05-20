const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");
// const Product = require("../../models/Product.js");
// const User = require("../../models/User.js");
// const Detail = require("../../models/Detail.js");

const deleteAll = async (req, res, next) => {
  try {
    const {cartId} = req.query

    await Detail.destroy({where: { cartId: cartId }})
    res.status(200).send("Todo eliminado")

  } catch (err) {
    next(err);
  }
};

module.exports = deleteAll;