const User = require("../../models/User")
const Cart = require("../../models/Cart")
const Detail = require("../../models/Detail")

const nodemailer = require("nodemailer");

const {USER_EMAIL,
PASS_EMAIL_APP} = process.env;

const purchaseEmail = async(req,res, next)=>{
  try{

    const { userId, cartId } = req.params;


    const user = await User.findOne({
        where:{
            id: userId,
        },
        include:{
            model: Cart,
            where:{
                id: cartId,
            },include:{
                model: Detail,
            }
        }
    }) 
    const order_priceTotal = user.carts.map(el => {
        return{
            id: el.id,
            price_total: el.price_total
        }
    })

    const data = user.carts[0].details.map(el => `Nombre: ${el.name} - Precio: $${el.price} x ${el.bundle} - Precio total: $${el.price_total} \n` )
    const data_total = data.toString().replace(/,/g, "");
   

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
        subject: `Recibo de la compra...`,
        text: "Gracias por tu compra, 🔸City Cell🔸",
        html: `<br/><h2 style="color:black">N° de orden: ${order_priceTotal[0].id}</h2>
        <br /> <h3 style="color:black">${data_total}</h3>       
        <br /><h3>Total: $${order_priceTotal[0].price_total}</h3>
        <br />
        <h4>Consultas: </h4>
        <a href="ecocitycell@gmail.com">ecocitycell@gmail.com</a>`
    }; 

    mailTransporter.sendMail(details, (err)=>{
        if(err){
            res.status(404).send("No enviado")
        }else{
            res.status(200).send("Mensaje enviado")
        }
    }) 
    //res.send(data.toString())

}catch(err){
    console.log(err)
    next(err)
}
}

module.exports = purchaseEmail;
