const Review = require("../../models/Review.js");

const getReviews = async (req, res, next) => {
    try {
        const allReviews = await Review.findAll(
            {
                attributes: ["id", "title", "points", "description", "detailId"]
            });
        if(allReviews.length) {
            return res.status(200).send(allReviews);
        } else {
            return res.status(400).send("There are no reviews.")
        }
    } catch (error) {
        next(error);
    }
}

module.exports = getReviews;

