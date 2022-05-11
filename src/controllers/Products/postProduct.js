const Product = require("../../models/Product.js");
const Category = require("../../models/Category.js");

const normalizeString = require('../../utils/normalizeString.js');
const convertToInt = require("../../utils/convertToInt.js");

const createProduct = async (req, res, next) => {
   const { name, img, price, description, stock, rating, categories } = req.body;
   try {
      const newProduct = await Product.create({
         name: normalizeString(name), 
         price, img, description,stock: convertToInt(stock), 
         rating: convertToInt(rating) 
      });
      
      categories.forEach(async(item) =>{
         const [newCategory, boolCreate] = await Category.findOrCreate({
            where: {
               name: normalizeString(item)
            }
         });
         await newProduct.addCategory(newCategory);
      })

      res.status(200).send(`Producto con nombre ${name}, creado`);
   } catch (error) {
      next(error);
   }
}

module.exports = createProduct;