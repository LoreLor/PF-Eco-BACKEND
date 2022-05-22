const User = require("../../models/User.js");

//const normalizeString = require('../../utils/normalizeString.js');

const putUser = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { name, email, password, role, dni, phone_number, address, birthday } = req.body;

       const updateUser = await User.update({
            name,
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

        res.status(200).json({
            id: updateUser.id,
            name: updateUser.name,
            email: updateUser.email,
            password: updateUser.password,
            role: updateUser.role,
            dni: updateUser.dni,
            phone_number: updateUser.phone_number,
            address: updateUser.address,
            birthday: updateUser.birthday
        });

    } catch (err) {
        next(err)
    }
}

module.exports = putUser;