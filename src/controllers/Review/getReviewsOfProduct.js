const Detail = require("../../models/Detail.js");
const Product = require("../../models/Product.js");
const Review = require("../../models/Review.js");
const User = require("../../models/User.js");

const getReviewsOfProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        
        // let detalle = await Detail.findOne({
        //     where: {
        //         productId: id,
        //     }
        // })
        
        res.status(200).send("Get reviews of products.")


    } catch (error) {
        next(error);
    }
}

module.exports = getReviewsOfProduct;

