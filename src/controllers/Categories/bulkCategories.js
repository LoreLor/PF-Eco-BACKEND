const { typesCategories } = require("../Extras/typesCategories");
const Category = require("../../models/Category.js");

const bulkCategories = async (req, res, next) => {

  try {
    await Category.bulkCreate(typesCategories);
    return res.status(200).send("Categorias creadas.")
  } catch (error) {
    next(error);
  }
};

module.exports = bulkCategories;
