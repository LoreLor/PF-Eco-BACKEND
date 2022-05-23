const Favorites = require("../../models/Favorites.js");
const Product = require("../../models/Product.js");
const User = require("../../models/User.js");

const getFavorites = async (req, res, next) => {
    const { userId } = req.query

    try {
        let favorites = await Favorites.findAll({
            where: {
                userId
            }
        })
        if(favorites) {
            res.status(200).send(favorites)
        } else {
            res.status(400).send("No hay favoritos.")
        }
    } catch (error) {
        next(error);
    }
}

module.exports = getFavorites;

