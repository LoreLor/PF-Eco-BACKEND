const Product = require("../../models/Product.js");
const Category = require("../../models/Category.js");

const normalizeString = require('../../utils/normalizeString.js');
const convertToInt = require("../../utils/convertToInt.js");

const createProduct = async (req, res, next) => {
   const { name, img, price, description, stock, rating, categories } = req.body;
   if(!name || !img || !price || !description || !stock || !rating) return res.status(400).send("Check the fields.")
   try {
      const newProduct = await Product.create({
         name: normalizeString(name),
         price, img, description, stock: convertToInt(stock),
         rating: convertToInt(rating)
      });
      if(!categories) return res.status(400).send("No esta mandando las categories.")
      categories.forEach(async (item) => {
         const [newCategory, boolCreate] = await Category.findOrCreate({
            where: {
               name: normalizeString(item),
               active: true,
            }
         });
         if (newCategory.dataValues.active) {
            await newProduct.addCategory(newCategory);
         }
      })

      res.status(200).send(`Producto con nombre ${name}, creado`);
   } catch (error) {
      next(error);
   }
}

module.exports = createProduct;