const User = require("../../models/User.js");
let {generateToken} = require("../../utils/generateToken.js");
const bcrypt = require("bcrypt")
const normalizeString = require('../../utils/normalizeString.js');


/* const postUser = async (req, res, next) => {
    const { name, last_name, user_name, email, phone_number, password, dni, address, birthday} = req.body;
    if (!name && !last_name && !user_name && !email && !password && !address) {
        res.status(400).json({ msg: "Faltan datos" });
    }
    try {
        const userNew = new User({
            name: normalizeString(name),
            last_name: normalizeString(last_name),
            user_name,
            email: email,
            password: bcrypt.hashSync(password, 8),
            dni: dni,
            phone_number: phone_number,
            address: address,
            birthday: birthday,
        })
        const user = await userNew.save()
        return res.status(200).send({
            name:user.name,
            last_name:user.last_name,
            user_name: user.user_name,
            email: user.email,
            token: generateToken(user),
            dni: user.dni,
            phone_number: user.phone_number,
            address: user.address,
            rol: user.rol,
            birthday: user.birthday,
            isActive: user.isActive
        });
    } catch (error) {
        next(error);
    }
} */

const postUser = async (req, res, next) => {
    const { name, last_name, user_name, email,password} = req.body;
    if (!name && !last_name && !user_name && !email && !password) {
        res.status(400).json({ msg: "Missing data" });
    }
    try {

        const [existUN,existEmail] = await Promise.all([
            User.findOne({where:{user_name:user_name}}),
            User.findOne({where:{email:email}}),
        ])
        if(existUN || existEmail){
            return res.status(200).json({msg: "User or Email already registered"})
        }
        const userNew = User.create({
            name,
            last_name,
            user_name,
            email: email,
            password: bcrypt.hashSync(password, 8),
        })
        if(userNew){
            return res.status(201).json({msg:"User registered"})
        }
    } catch (error) {
        next(error);
    }
}

module.exports = postUser;