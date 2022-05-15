const User = require("../../models/User");
let {generateToken} = require("../../utils/generateToken.js");
const bcrypt = require("bcryptjs")
const normalizeString = require('../../utils/normalizeString.js');



const postUser =  async (req, res, next) => {
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
            password: bcrypt.hashSync(password, 8),
            dni: dni,
            phone_number: phone_number,
            address: address,
            rol: rol,
            birthday: birthday,
        })
        user = await user.save()
       res.send({
           name:user.name,
           last_name:user.last_name,
           user_name:user.user_name,
           email:user.email,
           dni:user.dni,
           phone_number:user.phone_number,
           address:user.address,
           rol:user.rol,
           birthday:user.birthday,   
           token:generateToken(user.password)    

       }) 

    } catch (error) {
        next(error);
    }
}

module.exports = postUser;