const User = require("../../models/User.js");


const getUsers = async (req, res, next) => {
    try {
        let users = await User.findAll(
            {
                attributes: ["user_name", "id","isActive","email","rol"]
            }
        );
        res.status(200).send(users)
    } catch (error) {
        next(error);
    }
}

module.exports = getUsers;

