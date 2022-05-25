const Favorites = require("../../models/Favorites.js");
const Detail = require("../../models/Detail.js");

const getFavorites = async (req, res, next) => {
    const { userId } = req.query

    try {
        let favorites = await Favorites.findAll({
            where: {
                userId
            },
            include: {
                model: Detail
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

