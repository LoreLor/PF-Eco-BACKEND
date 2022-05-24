const Detail = require("../../models/Detail.js");
const Product = require("../../models/Product.js");
const Review = require("../../models/Review.js");
const User = require("../../models/User.js");

const getReviewDetail = async (req, res, next) => {
    const { detailId } = req.query;

    try {
        let review = await Review.findAll({
            where: {
                detailId
            }
        });
        if(review.length) {
            return res.status(200).send(review)
        } else {
            return res.status(200).send(detailId)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = getReviewDetail;

