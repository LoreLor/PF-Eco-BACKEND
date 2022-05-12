const Product = require("../../models/Product.js");
const Category = require("../../models/Category.js");

const normalizeString = require('../../utils/normalizeString.js');
const convertToInt = require("../../utils/convertToInt.js");

const createProduct = async (req, res, next) => {
   const {name, img, price, description, stock, rating, categories,active } = req.body;
   try {
      const newProduct = await Product.create({
         active,
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
      });
      const productDb = await Product.findOne({
         where: {
             name: name
         }
      });
      res.status(201).json({msg:"Producto creado exitosamente",id: productDb.id});
   } catch (error) {
      next(error);
   }
}

module.exports = createProduct;