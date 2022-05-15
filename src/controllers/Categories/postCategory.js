const Category = require("../../models/Category.js");

const normalizeString = require("../../utils/normalizeString.js");

const postCategory = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
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
        msg: "Category already exists",
      });
    } else {
      let newCategory = await Category.create({
        name: normalizeString(name),
      });

      res.status(201).json({
        msg: "Category created",
        name: newCategory.name,

      });
    }

  } catch (error) {
    next(error);
  }
};

module.exports = postCategory;
