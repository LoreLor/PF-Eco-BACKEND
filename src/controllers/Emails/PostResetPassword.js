const User = require("../../models/User");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { JWT_SECRET } = process.env;

const post_reset_password = async (req, res, next) => {
  const { id, token } = req.params;
  const { pass } = req.body;

  const user = await User.findOne({
    where: {
        id: id
    }
  });

  if (!user) {
    res.send("ID invalido...");
    return;
  };

  const secret = JWT_SECRET + user.password;
  try {
    const payload = jwt.verify(token, secret);
    user.password = pass;

    await User.update({
        password: pass
    }, {
        where: { id: id }
    });

    res.status(200).send("Contraseña actualizada");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports = post_reset_password;
