const Category = require('../../models/Category')
const Product = require('../../models/Product')

async function allProducts(res){
    const response = await Product.findAll({
        include: {
            model: Category,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })

    res.status(200).send(response)
};

module.exports = allProducts