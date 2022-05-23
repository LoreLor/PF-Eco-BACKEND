const Favorites = require("../../models/Favorites.js");
//Esta se puede borrar
const putFavorites = async (req, res, next) => {
    const { userId, productId } = req.query;


    try {
        let favorite = await Favorites.findAll({
            where: {
                userId,
                productId
            }
        })

        if(favorite.length) {

            let eliminated = await Favorites.destroy({
                where: {
                    id: favorite[0].id
                }
            })
            
            if(eliminated) {
                res.status(200).send("Favorito eliminado correctamente")
            }
        } else {
            res.status(400).send("Favorito no encontrado")
        }
    } catch (error) {
        next(error);
    }
}
module.exports = putFavorites;