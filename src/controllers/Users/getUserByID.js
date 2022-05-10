const User = require("../../models/User.js");

const getUserByID = async (req, res, next) => {
    const { id } = req.params;
    let validate = id.includes("-");
    try {
        if (validate) {
            let userByID = await User.findByPk(id)
            return res.status(200).send(userByID);
        }
        return res.status(400).send("User not found.")
    } catch (error) {
        next(error);
    }
}

module.exports = getUserByID;

