const User = require("../../models/User.js");

const deleteUser = async (req, res, next) => {
    try{

        const { id } = req.params;

        await User.destroy({
            where: {
                id
            }
        });
        res.status(200).json({
            message: "Usuario eliminado correctamente"
        })

    }catch(err){
        console.log(err)
    }
}

module.exports = deleteUser;