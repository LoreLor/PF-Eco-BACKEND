const User = require("../../models/User")
const nodemailer = require("nodemailer");

const {USER_EMAIL,
PASS_EMAIL_APP} = process.env;

const purchaseEmail = async(req,res, next)=>{
  try{

    const {userId} = req.params;

    const user = await User.findOne({
      where:{
        id: userId
      }
    }); 

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
        subject: `Hola ${user.name} ${user.last_naem}`,
        text: "Gracias por tu compra ---> 🔸City Cell🔸"
    };

    mailTransporter.sendMail(details, (err)=>{
        if(err){
            res.status(404).send("No enviado")
        }else{
            res.status(200).send("Mensaje enviado")
        }
    })

}catch(err){
    console.log(err)
    next(err)
}
}

module.exports = purchaseEmail;
