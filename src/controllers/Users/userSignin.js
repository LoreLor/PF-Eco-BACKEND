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
                user_name: user.user_name,
                email: user.email,
                rol: user.rol,
                token: generateToken(user)
            });
            return;
        }
    };
    res.status(401).send({ msg: 'Invalid email or password' })
};


module.exports = userSignin