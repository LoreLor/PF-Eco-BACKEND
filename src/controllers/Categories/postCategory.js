const Category = require("../../models/Category.js");
const { types } = require("./arrayCategories");

const normalizeString = require("../../utils/normalizeString.js");

const postCategory = async (req, res, next) => {
  const { name } = req.body;

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

      res.status(200).json({
        msg: "Categoria creada correctamente",
        category: newCategory,
      });
    }

    /*     if (newCategory[1]) {
      types.push(newCategory[0].name);
      return res
        .status(201)
        .send({
          msg: "Category added successfully",
          name: newCategory[0].name,
        });
    } else {
      return res.status(304).send({ msg: "Category already exists." });
    } */
  } catch (error) {
    next(error);
  }
};

module.exports = postCategory;
