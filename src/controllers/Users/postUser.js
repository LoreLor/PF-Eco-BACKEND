const User = require("../../models/User.js");
const bcrypt = require("bcrypt");

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
    const userNew = User.create({
      name,
      last_name,
      user_name,
      email: email,
      password: bcrypt.hashSync(password, 8),
    });
    if (userNew) {
      return res.status(201).json({ msg: "User registered" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = postUser;
