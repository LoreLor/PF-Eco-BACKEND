const Category = require("../../models/Category.js");

const getCategory = async (req,res,next)=>{
    const {name}= req.params
    try {
        let categorySearch = await Category.findOne({
            where:{
                name:name
            }
        })
        console.log(categorySearch)
        res.status(200).send(categorySearch)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getCategory