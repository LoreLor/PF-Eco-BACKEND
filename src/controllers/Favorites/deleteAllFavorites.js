const Favorites = require("../../models/Favorites.js");
//Esta se puede borrar
const deleteAllFavorites = async (req, res, next) => {

    const { userId } = req.query;

    try {
        let eliminates = await Favorites.destroy({
            where: {
                userId
            }
        });
        res.status(200).send(`Se eliminaron ${eliminates} favoritos.`)
    } catch (error) {
        next(error);
    }
}
module.exports = deleteAllFavorites;