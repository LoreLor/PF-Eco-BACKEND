const modelProduct = require("../models/Product");

async function getById(id,req,res){
    try{

        const detailProduct = await modelProduct.findOne({
            where: id
        })

        res.status(200).json(detailProduct)

    }catch(err){
        console.log(err)
    }
}
module.exports=getById