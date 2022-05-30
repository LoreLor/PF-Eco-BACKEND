const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");


const paidCart = async (req, res, next) => {
    const { cartId } = req.query;


    try {
        let cart = await Cart.findByPk(cartId,
            {
                include: {
                    model: Detail,
                }
            });

        if (cart) {
            var sum = 0;
                for (let i = 0; i < cart.details.length; i++) {
                    sum = sum + cart.details[i].price_total
                }

            await Cart.update(
                {
                    status: "paid",
                    open: false,
                    date: new Date(),
                    price_total: sum
                },
                {
                    where: {
                        id: cartId
                    }
                }
            )
            res.status(200).send("Accredited purchase.")
        } else {
            res.status(400).send("Cart not found.")
        }

    } catch (err) {
        next(err);
    }
};

module.exports = paidCart;