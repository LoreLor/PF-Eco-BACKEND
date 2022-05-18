const Cart = require("../../models/Cart.js");
const Product = require("../../models/Product.js");
const User = require("../../models/User.js");
const Detail = require("../../models/Detail.js");

const test = async(req, res)=> {
    try{

        const {userId} = req.query;

        const todo = await Cart.findOne({
            where:{
                userId: userId,
            },
            include: {
                model: Detail,
            }
        })  

        res.send(todo)

    }catch(err){
        console.log(err)
    }
}

module.exports = test;