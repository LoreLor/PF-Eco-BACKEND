const User = require("../../models/User");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { JWT_SECRET, USER_EMAIL, PASS_EMAIL_APP} = process.env;


const post_forgot_password = async (req, res, next) => {
  try {
    const { email } = req.body;

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
    const link = `http://localhost:3001/email/reset-password/${user.id}/${token}`;
    //console.log(link);

    ///*
    ///*
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
        text: link
    };

    mailTransporter.sendMail(details, (err)=>{
        if(err){
            res.status(404).send("No enviado")
        }else{
            res.status(200).send("Mensaje enviado")
        }
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = post_forgot_password;
