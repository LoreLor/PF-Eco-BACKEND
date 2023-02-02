const User = require("../../models/User");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { JWT_SECRET, USER_EMAIL, PASS_EMAIL_APP} = process.env;


const post_forgot_password = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(email)
    const user = await User.findOne({
        where: {
            email: email
        }
    });

    if (!user) {
      res.send("Usuario no registrado");
      return;
    }

    const secret = JWT_SECRET + user.password;

    const payload = {
      email: user.email,
      id: user.id,
    };

    const token = jwt.sign(payload, secret, {
      expiresIn: "7d",
    });

    //Este link se debe enviar por email al usuario
    const link = `${SERVER}/email/reset-password/${user.id}/${token}`;
    
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: USER_EMAIL,
            pass: PASS_EMAIL_APP
        }
    });

    let details = {
        from: "City Cell",
        to: user.email,
        subject: `Recuperacion de constraseña`,
        text: `Entra a este link: ${link}`,
    };

    mailTransporter.sendMail(details, (err)=>{
        if(err){
            res.status(404).send("Error al enviar el email");
        }else{
            res.status(200).send("Email enviado");

        }
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = post_forgot_password;
