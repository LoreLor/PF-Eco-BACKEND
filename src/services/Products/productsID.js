const Product = require("../../models/Product");

const getById = async(id,req,res)=>{
    try{

        const detailProduct = await Product.findOne({
            where: {
                id: id
            }
        })

        res.status(200).send(detailProduct)

    }catch(err){
        console.log(err)
    }
}
module.exports = getById;