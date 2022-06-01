const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");
const User = require("../../models/User.js");

const getAllCartsPaid = async (req, res, next) => {
    try {
        let allCartsPaid = await Cart.findAll({
            where: {
                open: false,
            },
            include: [{ 
                model: Detail,
                attributes:["img","name","price","bundle","price_total","productId"]
             },{ 
                model: User,
                attributes:["user_name","email","name","last_name","phone_number","address"]
             }],
        })  
        
        return res.status(200).send(allCartsPaid)
    } catch (err) {
        next(err);
    }
};

module.exports = getAllCartsPaid;