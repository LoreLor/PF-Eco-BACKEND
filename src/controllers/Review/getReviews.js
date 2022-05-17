const Review = require("../../models/Review.js");

const getReviews = async (req, res, next) => {
    try {
        const allReviews = await Review.findAll(
            {
                attributes: ["title", "points", "description"]
            });
        res.status(200).send(allReviews);
    } catch (error) {
        next(error);
    }
}

module.exports = getReviews;

