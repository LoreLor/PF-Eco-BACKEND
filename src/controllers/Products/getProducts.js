const Category = require("../../models/Category.js");
const Product = require("../../models/Product.js");
const normalizeString = require("../../utils/normalizeString.js");

const getProducts = async (req, res, next) => {
  const { name } = req.query;
  try {
    let allProducts = await Product.findAll(
      {
        include: [{
          model: Category,
          attributes: ["name"],
          through: {
            attributes: [],
          }
        }]
      },
      )
    if (name) {
      let productByName = allProducts.filter(r => normalizeString(r.dataValues.name).includes(normalizeString(name.toString())));
      if (productByName.length > 0) {
        return res.status(200).send(productByName);
      }
      return res.status(400).send("Producto no encontrado.");
    } else {
      let showedProducts = allProducts.filter(r => r.dataValues.active === true);
      return res.status(200).send(showedProducts);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = getProducts;