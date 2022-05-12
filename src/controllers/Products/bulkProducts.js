const Product = require("../../models/Product.js");

const bulkProducts = async (req, res, next) => {
  try {
    await Product.bulkCreate(req.body);
    res.status(200).send("Array de productos cargado correctamente.")
  } catch (error) {
    next(error);
  }
};

module.exports = bulkProducts;
