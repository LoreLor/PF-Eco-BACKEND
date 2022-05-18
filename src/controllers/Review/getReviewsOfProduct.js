const Detail = require("../../models/Detail.js");
const Product = require("../../models/Product.js");
const Review = require("../../models/Review.js");
const User = require("../../models/User.js");

const getReviewsOfProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        
        let review = await Product.findByPk(id , {
            include: [{
                model: Detail,
                include: [{
                    model: Review
                }]
            }]
        })

        res.status(200).send(review)
        
        res.status(200).send("Get reviews of products.")


    } catch (error) {
        next(error);
    }
}

module.exports = getReviewsOfProduct;

