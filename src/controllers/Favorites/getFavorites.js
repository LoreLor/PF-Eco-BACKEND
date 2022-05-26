const Favorites = require("../../models/Favorites.js");
const Product = require("../../models/Product.js");

const getFavorites = async (req, res, next) => {
    const { userId } = req.query

    try {
        let favorites = await Favorites.findAll({
            where: {
                userId
            },
        })

        let infoFavs = []
        if(favorites) {
            for (let i = 0; i < favorites.length; i++) {
                let products = await Product.findByPk(favorites[i].productId,
                    {attributes: ["id", "name", "img"]}
                    )
                    infoFavs.push(products)
                }
            }

        if(infoFavs.length) {
            res.status(200).send(infoFavs)
        } else {
            res.status(400).send("No hay favoritos.")
        }
    } catch (error) {
        next(error);
    }
}

module.exports = getFavorites;

