const { typesProducts } = require("../Extras/typesProducts");
const Product = require("../../models/Product.js");
const Category = require("../../models/Category");
const normalizeString = require("../../utils/normalizeString");

const bulkProducts = async (req, res, next) => {

  try {
    typesProducts.forEach(async n => {
        let newProduct = await Product.create({
                name: n.name,
                img: n.img,
                price: n.price,
                description: n.description,
                rating: n.rating,
                stock: n.stock,
        })
        n.categories.forEach(async (item) => {
            const [newCategory, boolCreate] = await Category.findOrCreate({
                where: {
                    name: normalizeString(item),
                }
            })
            await newProduct.addCategory(newCategory);
        })
    });
    return res.status(200).send("Productos creados")
  } catch (error) {
    next(error);
  }
};

module.exports = bulkProducts;
