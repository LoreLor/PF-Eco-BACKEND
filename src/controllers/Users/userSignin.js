const User = require("../../models/User.js");
const {generateToken} = require("../../utils/generateToken.js");
const bcrypt = require("bcryptjs")

const userSignin = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email: email,
        }
    });
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            res.send({
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                user_name: user.user_name,
                email: user.email,
                address: user.address,
                phone_number: user.phone_number,
                rol: user.rol,
                token: generateToken(user)
            });
            return;
        }
    };
    res.status(401).send({ msg: 'Invalid email or password' })
};


module.exports = userSignin