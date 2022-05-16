const Cart = require("../../models/Cart.js");

const getProductsCart = async(req, res)=>{
    try{
        let result = await Cart.findAll()
        if(result.length > 0){
            res.json({
                status: "success",
                data: result
            })
        }else{
            res.json({
                status: "error",
                message: "No hay productos en el carrito"
            })
        }

    }catch(err){
        console.log(err)
    }
}

module.exports = getProductsCart;