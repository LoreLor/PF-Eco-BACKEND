const Detail = require("../../models/Detail.js");
const Product = require("../../models/Product.js");
const Review = require("../../models/Review.js");
const User = require("../../models/User.js");

const getReviewsOfProduct = async (req, res, next) => {
    const { productId } = req.query;
    try {

        let product = await Product.findByPk(productId, {
            include: [{
                model: Detail,
                include: [{
                    model: Review
                }]
            }]
        })

        var sum = 0
        var cont = 0
        var prom = 0
        for (let i = 0; i < product.dataValues.details.length; i++) {
            sum = sum + product.dataValues.details[i].dataValues.review.dataValues.points
            cont++;
        }

       prom = Math.ceil(sum/cont)

       await Product.update(
        {
          rating: prom
        },
        {
          where: {
            id: productId
          },
        }
        )

        if(product) {
            var detalles = product.dataValues.details;
            if(detalles.length) {
                var reviews = [];
                for (let i = 0; i < detalles.length; i++) {
                    if(detalles[i].review) {
                        reviews.push(detalles[i].review)
                    }
                }
                if(reviews.length) {
                    return res.status(200).send(reviews);
                } else {
                    return res.status(200).send("This product has no reviews.")
                }
            } else {
                return res.status(200).send("This products has no details.")
            }
        } else {
            return res.status(200).send("Product not found.")
        }

    } catch (error) {
        next(error)
    }
}

module.exports = getReviewsOfProduct;

