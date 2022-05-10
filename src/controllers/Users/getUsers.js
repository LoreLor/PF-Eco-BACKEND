const User = require("../../models/User.js");

const getUsers = async (req, res, next) => {
    try {
        let users = await User.findAll();
        res.status(200).send(users)
    } catch (error) {
        next(error);
    }
}

module.exports = getUsers;

