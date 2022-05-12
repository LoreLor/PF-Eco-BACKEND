const Category = require("../../models/Category.js");
const Product = require("../../models/Product.js");
const normalizeString = require("../../utils/normalizeString.js");

<<<<<<< HEAD
async function getProducts(req, res,next) {
  try {
    const { category } = req.query;
    const { id } = req.params;

    if (id) {
      await  getById(id, req, res);
    }
    if (category) {
      await getCategory(category, req, res);
    } else {
      await allProducts(res);
    }
  } catch (err) {
    next(err);
=======
const getProducts = async(req, res, next)=>{
  const { name } = req.query;
  try {
      let allProducts = await Product.findAll({
          include: [{
            model: Category,
            attributes: ["name"],
            through: {
              attributes: [],
            }
          }]
        })
      if (name) {
          let productByName = allProducts.filter(r => normalizeString(r.dataValues.name).includes(normalizeString(name.toString())));
          if(productByName.length > 0) {
              return res.status(200).send(productByName);
          }
          return res.status(400).send("Producto no encontrado.");
      } else {
          res.status(200).send(allProducts);
      }
  } catch (error) {
      next(error);
>>>>>>> 07a456e979ec5ff1dfc2c93f8d6356e7d7ccd228
  }
}

module.exports = getProducts;