const User = require("../../models/User.js");
const Cart = require("../../models/Cart.js");
const bcrypt = require("bcrypt")

const postUser = async (req, res, next) => {
  const { name, last_name, user_name, email, password } = req.body;
  if (!name && !last_name && !user_name && !email && !password) {
    res.status(400).json({ msg: "Missing data" });
  }
  try {
    const [existUN, existEmail] = await Promise.all([
      User.findOne({ where: { user_name: user_name } }),
      User.findOne({ where: { email: email } }),
    ]);
    if (existUN || existEmail) {
      return res.status(200).json({ msg: "User or Email already registered" });
    }
    try {

        const [existUN,existEmail] = await Promise.all([
            User.findOne({where:{user_name:user_name}}),
            User.findOne({where:{email:email}}),
        ])
        if(existUN || existEmail){
            return res.status(200).json({msg: "User or Email already registered"})
        }

        const userNew = await User.create({
            name,
            last_name,
            user_name,
            email: email,
            password: bcrypt.hashSync(password, 8),
        })

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

        if(userNew){
            return res.status(201).send(dataUserCart)
        }
    } catch (error) {
        next(error);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = postUser;
