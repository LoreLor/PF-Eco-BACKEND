const Category = require("../../models/Category.js");
const Detail = require("../../models/Detail.js");
const Product = require("../../models/Product.js");
const Review = require("../../models/Review.js");
const normalizeString = require("../../utils/normalizeString.js");

const getProducts = async (req, res, next) => {
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

    let reviews = await Review.findAll({
      include: [{
        model: Detail,
        attributes: ["productId"],
      }]
    })

    for (let i = 0; i < reviews.length; i++) {
      if(reviews[i].detailId !== null) {
        let amountReviews = await Review.findAll({where: {detailId: reviews[i].detailId}})
        let productUpdate = await Product.update(
          {
            rating: Math.ceil(reviews[i].points  / amountReviews.length)
          },
          {
            where: {
              id: reviews[i].detail.productId
            },
          }
          
          )
        }
    }
    allProducts = await Product.findAll({
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
      if (productByName.length > 0) {
        return res.status(200).send(productByName);
      }
      return res.status(400).send("Producto no encontrado.");
    } else {
      res.status(200).send(allProducts);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = getProducts;