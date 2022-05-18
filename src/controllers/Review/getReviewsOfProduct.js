const Detail = require("../../models/Detail.js");
const Product = require("../../models/Product.js");
const Review = require("../../models/Review.js");
const User = require("../../models/User.js");

const getReviewsOfProduct = async (req, res, next) => {
    const { productId } = req.query;
    try {
        
        let review = await Product.findByPk(productId , {
            include: [{
                model: Detail,
                include: [{
                    model: Review
                }]
            }]
        })


        res.status(200).send("Reviews: " + review.dataValues.details[0].review)


    } catch (error) {
        next(error)
    }
}

module.exports = getReviewsOfProduct;

