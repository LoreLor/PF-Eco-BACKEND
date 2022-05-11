const Category = require("../../models/Category.js");

const putCategory = async(req, res)=>{
    try{
        
        const {id} = req.params;
        const {name} = req.body;

        const updateCategory = await Category.update({
            name
        },{
            where: {
                id
            }
        });
        res.status(200).send("Se a actualizado a: " + name);

    }catch(err){
        next(err)
    }
}

module.exports = putCategory;