const User = require("../../models/User");

const postUser = async (req, res, next) => {
    const { name, last_name, user_name, email, phone_number, password, dni, address, rol, birthday } = req.body;
    if (!name || !last_name || !user_name || !email || !password || !address) {
        res.status(400).json({ msg: "Faltan datos" });
    }
    try {
        const user = await User.create({
            name: name,
            last_name: last_name,
            user_name: user_name,
            email: email,
            password: password,
            dni: dni,
            phone_number: phone_number,
            address: address,
            rol: rol,
            birthday: birthday,
        })
        return res.status(200).send(user);
    } catch (error) {
        next(error);
    }

}

module.exports = postUser;