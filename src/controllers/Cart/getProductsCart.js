const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");

const getProductsCart = async(req, res)=>{
    try{
        const {id} = req.params;

        const summaryDetail = await Cart.findOne({
            where:{ userId: id, open: true },
            include: { 
                model: Detail,
                
             }
        });  

        res.status(200).send(summaryDetail)
    }catch(err){
        console.log(err)
    }
};

module.exports = getProductsCart;