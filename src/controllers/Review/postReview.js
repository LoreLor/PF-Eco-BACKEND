const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");
const Product = require("../../models/Product.js");
const Review = require("../../models/Review.js");
const User = require("../../models/User.js");

const postReview = async (req, res, next) => {
    const { detailId } = req.query;
    const { title, points, description } = req.body

    try {
        let detail = await Detail.findByPk(detailId, {
            include: [{
                model: Review,
            }],
            include: [{
                model: Cart,
            }]
        })
        
        const allReviews = await Review.findAll(
            {where: {
                detailId,
            }},
            {
                attributes: ["id", "title", "points", "description", "detailId"]
            });

        if (detail) {
            let findCart = await Cart.findByPk(detail.dataValues.cartId);
            let findUser = await User.findByPk(findCart.dataValues.userId)

            if (title && points >= 0 && points <= 5 && description) {
                if(allReviews.length === 0) {

                    let newReview = await Review.create({
                        autor: findUser.dataValues.user_name,
                        title,
                        points,
                        description
                    })
                    
                    detail.setReview(newReview);
                    detail.save();
                    
                    return res.status(200).send("Review added successfully.");
                } else {
                    return res.status(400).send("You have already added a review to this product.")
                }
            } else {
                if (!title) return res.status(400).send("Title cannot be null.");
                if (!description) return res.status(400).send("Description cannot be null.");
                if (points < 0 || points > 5) return res.status(400).send("Rating goes from 0 to 5.");
                return res.status(400).send("Check the fields.");
            }

        } else {
            return res.status(400).send("Product not found.")
        }

    } catch (error) {
        next(error);
    }
}

module.exports = postReview;

