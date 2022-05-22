const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");


const paidCart = async (req, res, next) => {
    const { cartId } = req.query;


    try {
        let cart = await Cart.findByPk(cartId,
            {include: {
                model: Detail,
              }});

        if (cart) {
                await Cart.update(
                    {
                        open: false,
                    },
                    {
                        where: {
                            id: cartId
                        }
                    }
                )
                res.status(200).send("Cart closed.")
        } else {
            res.status(400).send("Cart not found.")
        }

    } catch (err) {
        next(err);
    }
};

module.exports = paidCart;