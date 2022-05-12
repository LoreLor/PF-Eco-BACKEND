const Category = require("../../models/Category.js");
const { types } = require("./arrayCategories");

const normalizeString = require("../../utils/normalizeString.js");

const postCategory = async (req, res, next) => {
  const { name } = req.body;

  if(!name) {
    return res.status(400).send("Category cannot be null.")
  }

  try {
    const existCategory = await Category.findOne({
      where: {
        name: normalizeString(name),
      },
    });

    if (existCategory) {
      res.status(400).json({
        msg: "La categoria ya existe en la base de datos",
      });
    } else {
      let newCategory = await Category.create({
        name: normalizeString(name),
      });

      res.status(201).json({
        msg: "Categoria creada correctamente",
        name: newCategory.name,

      });
    }
    
  } catch (error) {
    next(error);
  }
};

module.exports = postCategory;
