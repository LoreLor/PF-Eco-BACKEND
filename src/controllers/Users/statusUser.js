const User = require("../../models/User.js");

const statusUser = async (req, res, next) => {
    const { id } = req.params;
    const { isActive, rol } = req.body;
    if(isActive !== true && isActive !== false || !rol){return res.status(400).json({msg:"Missing data"})}
    try {
        await User.update({
            isActive,
            rol
        }, {
            where: {
                id
            }
        });
        res.status(200).json({
            msg: "Status updated"
        })

    } catch (error) {
        next(error)
    }
}

module.exports = statusUser;