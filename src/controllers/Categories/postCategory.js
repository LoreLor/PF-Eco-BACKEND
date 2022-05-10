const Category = require("../../models/Category.js");
const { types } = require("./arrayCategories");

const postCategory = async (req, res, next) => {
    const { name } = req.body;

    try {
        let newCategory = await Category.findOrCreate({
            where: {
                name,
            }
        })
        if (newCategory[1]) {
            types.push(newCategory[0].name)
            return res.status(201).send({msg:"Category added successfully", name :newCategory[0].name})
        } else {
            return res.status(304).send({msg:"Category already exists."})
        }
    } catch (error) {
        next(error);
    }
}


module.exports = postCategory;
