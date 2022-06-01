const User = require("../../models/User");

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const post_reset_password = async (req, res, next) => {
  const { id, token } = req.params;
  const { pass, pass2 } = req.body;

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
        password: bcrypt.hashSync(pass, 8)
    }, {
        where: { id: id }
    });

    res.render("updatePassword");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports = post_reset_password;
