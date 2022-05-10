const Product = require("../../models/Product.js");
const Category = require("../../models/Category.js");

const createProduct = async (req, res, next) => {
   const { name, img, price, description, stock, rating, categories } = req.body;
   try {
      const newProduct = await Product.create({
         name,
         price,
         img,
         description,
         stock,
         rating,
      })
      let categoryAUX = await Category.findAll({
         where: {
            name: categories
         }
      })
      await newProduct.addCategory(categoryAUX);

      res.status(200).send(newProduct);
   } catch (error) {
      next(error);
   }
}

module.exports = createProduct;