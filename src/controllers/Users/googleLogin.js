const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const Cart = require("../../models/Cart")
const client = new OAuth2Client(process.env.CLIENT_SECRET);



const googleLogin = async (req, res) => {
    const { idToken } = req.body;
    console.log("credential", idToken);

    const userAuth = await client.verifyIdToken({
        idToken,
        audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    });
    const { email_verified, name, email, family_name, given_name } = userAuth.payload;

    const userFound = await User.findOne({
        where: {
            email: email,
        },
    });


    if (email_verified !== false && userFound) {
        res.send(userFound);

    } else if (email_verified !== true && userFound) {
        const user = await User.findOne({ where: { email: email } });
        const token = jwt.sign(
            {
                id: user.id,
                name: user.give_name,
                email: user.email,
            },
            process.env.JWT_KEY || "secret",
            { expiresIn: "7d" }
        );
        res.json({
            token,
            user,
        });
        res.status(400).json({ msg: "Somthing went wrong" });

    } else {
        // si no existe me creo el usuario
        let password = email + process.env.JWT_KEY;
        const userNew = await User.create({
            name: given_name,
            email: email,
            password: bcrypt.hashSync(password, 8),
            last_name: family_name,
            user_name: given_name,
        });
        res.status(201).send(userNew);
        const cartNew = await Cart.create({
            payment_method: null,
            date: null,
            status: null,
            open: true,
            userId: userNew.id,
            price_total: 0
        });

        await userNew.addCart(cartNew);
        const dataUserCart = await User.findOne({
            where: {
                id: userNew.id,
            },
            include: {
                model: Cart,
            }
        });

    }
};

module.exports = googleLogin;
