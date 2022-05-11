const getById = require("../../services/Products/productsID");
const getCategory = require("../../services/Products/productCategory");
const allProducts = require("../../services/Products/allProducts");

async function getProducts(req, res) {
  try {
    const { category } = req.query;
    const { id } = req.params;

    if (id) {
      await getById(id, req, res);
    }
    if (category) {
      await getCategory(category, req, res);
    } else {
      await allProducts(res);
    }
  } catch (err) {
    next(err);
  }
}

module.exports = getProducts;
