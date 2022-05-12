const Category = require("../../models/Category.js");

const bulkCategories = async (req, res, next) => {
  try {
    await Category.bulkCreate(req.body);
    res.status(200).send("Array de categorias cargado correctamente.")
  } catch (error) {
    next(error);
  }
};

module.exports = bulkCategories;
