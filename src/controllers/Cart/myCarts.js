const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");

const myCarts = async (req, res, next) => {
    const { userId } = req.query;

    try {
        let cart = await Cart.findAll({
            where:{ userId, open: false },
            include: { 
                model: Detail,
             }
        });

        if (cart) {
            res.status(200).send(cart)
        } else {
            res.status(400).send("Cart not found.")
        }

    } catch (err) {
        next(err);
    }
};

module.exports = myCarts;