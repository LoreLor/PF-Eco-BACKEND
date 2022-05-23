const Favorites = require("../../models/Favorites.js");

const postFavorites = async (req, res, next) => {
    const { userId, productId } = req.query

    try {
        if(userId && productId) {
            let addFavorite = await Favorites.create({
                userId,
                productId
            })
            if(addFavorite) {
                res.status(200).send("Favorito agregado correctamente")
            }
        } else {
            res.status(400).send("Se necesita la id de usuario y la id del producto")
        }
    } catch (error) {
        next(error);
    }
}

module.exports = postFavorites;

