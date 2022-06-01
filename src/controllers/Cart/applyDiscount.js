const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");

const applyDiscount = async (req, res, next) => {
    const { cartId, newPriceTotal } = req.query;
    console.log(cartId)
    console.log(newPriceTotal)
    try {
        let update = await Cart.update({
            price_total: parseInt(newPriceTotal),
        },
        {
            where: {
                id: cartId,
            }
        }
        )    

        let cart = await Cart.findAll({
            where:{ id: cartId, open: true },
            include: { 
                model: Detail,
             }
        });

        if(update) {
            return res.status(200).send(cart[0])
        } else {
            return res.status(200).send("Descuento no aplicado.")
        }
    } catch (err) {
        next(err)
    }
};

module.exports = applyDiscount;