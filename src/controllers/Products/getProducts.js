const getById = require("../../services/productsID");
const getCategory = require("../../services/productCategory");
const allProducts = require("../../services/allProducts");

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
    console.log(err);
  }
}

module.exports = getProducts;
