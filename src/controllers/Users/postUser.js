const User = require("../../models/User");
const generateToken = require("../../utils/generateToken");
const bcrypt = require("bcryptjs")
const normalizeString = require('../../utils/normalizeString.js');


const postUser = async (req, res, next) => {
    const { name, last_name, user_name, email, phone_number, password, dni, address, rol, birthday } = req.body;
    if (!name || !last_name || !user_name || !email || !password || !address) {
        res.status(400).json({ msg: "Faltan datos" });
    }
    try {
        const user = await User.create({
            name: normalizeString(name),
            last_name: normalizeString(last_name),
            user_name: user_name,
            email: email,
            password: bcrypt.hashSync(password, 8),
            dni: dni,
            phone_number: phone_number,
            address: address,
            rol: rol,
            birthday: birthday,
        })
        return res.status(200).send({
            name: normalizeString(user.name),
            last_name: normalizeString(user.last_name),
            user_name: user.user_name,
            email: user.email,
            token: generateToken(user),
            dni: user.dni,
            phone_number: user.phone_number,
            address: user.address,
            rol: user.rol,
            birthday: user.birthday,
        });

    } catch (error) {
        next(error);
    }
}

module.exports = postUser;