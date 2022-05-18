const Detail = require("../../models/Detail.js");
const Review = require("../../models/Review.js");
const User = require("../../models/User.js");

const getReviewsByUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        
        res.status(200).send("Get reviews by user")


    } catch (error) {
        next(error);
    }
}

module.exports = getReviewsByUser;

