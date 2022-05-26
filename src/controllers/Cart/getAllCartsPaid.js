const Cart = require("../../models/Cart.js");

const getAllCartsPaid = async (req, res, next) => {
    try {
        let allCartsPaid = await Cart.findAll({
            where: {
                open: false,
            }
        })  
        
        return res.status(200).send(allCartsPaid)
    } catch (err) {
        next(err);
    }
};

module.exports = getAllCartsPaid;