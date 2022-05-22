const User = require("../../models/User.js");

//const normalizeString = require('../../utils/normalizeString.js');

const putUser = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { name,last_name, user_name, email, password, role, dni, phone_number, address, birthday } = req.body;

       await User.update({
            name,
            last_name,
            user_name,
            email,
            password,
            role,
            dni,
            phone_number,
            address,
            birthday
        }, {
            where: {
                id
            }
        });

        let r = await User.findOne({
            where: {
                id
            }
        })

        res.status(200).send(
             r
        );

    } catch (err) {
        next(err)
    }
}

module.exports = putUser;