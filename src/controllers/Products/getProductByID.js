const Category = require("../../models/Category.js");
const Product = require("../../models/Product.js");

const getProductByID = async (req, res, next) => {
  const { id } = req.params;
  let validate = id.includes("-");
  try {
    if (validate) {
      const productByID = await Product.findByPk(id, {
        include: [{
          model: Category,
          attributes: ["name"],
          through: {
            attributes: [],
          }
        }]
      })
      return res.status(200).send(productByID);
    }
    return res.status(400).send("Producto no encontrado")
  } catch (error) {
    next(error);
  }
}

module.exports = getProductByID;

