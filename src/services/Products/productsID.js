const Product = require("../../models/Product");
const Category = require("../../models/Category")

const getById = async(id,req,res)=>{
    try{

        const detailProduct = await Product.findOne({
            where: {
                id: id
            },
            include:[{model:Category}]
        })

        return res.status(200).send(detailProduct)

    }catch(err){
        console.log(err)
    }
}
module.exports = getById;