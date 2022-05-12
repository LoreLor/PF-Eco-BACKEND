const Product = require("../../models/Product.js");
const Category = require("../../models/Category.js");

const normalizeString = require('../../utils/normalizeString.js');
const convertToInt = require("../../utils/convertToInt.js");

const createProduct = async (req, res, next) => {
   const { name, img, price, description, stock, rating, categories } = req.body;
   if(!name || !img || !price || !description || !stock || !rating || !categories) return res.status(400).send("Check the fields.")
   try {
      const newProduct = await Product.create({
         name: normalizeString(name),
         price, img, description, stock: convertToInt(stock),
         rating: convertToInt(rating)
      });

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

      res.status(201).json({msg:"Producto creado exitosamente",name: newProduct.name});
   } catch (error) {
      next(error);
   }
}

module.exports = createProduct;