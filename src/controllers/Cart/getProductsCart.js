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

        if(summaryDetail){
            var sum = 0;
            for (let i = 0; i < summaryDetail.details.length; i++) {
                sum = sum + summaryDetail.details[i].price_total
            }
            
            await Cart.update({
                price_total: sum
            }, {
                where: {
                    id: summaryDetail.id,
                }
            });
        }
        res.status(200).send(summaryDetail)
    }catch(err){
        console.log(err)
    }
};

module.exports = getProductsCart;