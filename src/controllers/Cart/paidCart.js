const Cart = require("../../models/Cart.js");
const Detail = require("../../models/Detail.js");
const Product = require("../../models/Product.js");
const User = require("../../models/User.js");

const nodemailer = require("nodemailer");
const axios = require("axios");

const {
    USER_EMAIL,
    PASS_EMAIL_APP
} = process.env;

const paidCart = async (req, res, next) => {
    try {
      const { userId, cartId } = req.query;
    
      const allData = await Cart.findOne({
          where: {
            id: cartId,
            userId: userId,
          },
          include: {
            model: Detail,
            include: {
              model: Product,
            },
          },
      });

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
      });
      
      const order_priceTotal = user.carts.map(el => {
          return{
              id: el.id,
              price_total: el.price_total
          }
      });
    
      const data = user.carts[0].details.map(el => `Nombre: ${el.name} - Precio: $${el.price} x ${el.bundle} - Precio total: $${el.price_total} \n` )
      const data_total = data.toString().replace(/,/g, "");
     

      //Actualizar y cerrar el carrito del usuario
      await Cart.update(
          {
            status: "paid",
            date: new Date(),
            open: false,
            price_total: allData.price_total,
          },
          {
            where: {
              id: cartId,
              userId: userId,
            },
          }
      );
    
      //Recorre los productos qu estan en el carrito
      allData.details.forEach(async (details) => {
          await Product.update(
            {
              stock:
                parseInt(allData.details[0].product.stock, 10) -
                parseInt(details.bundle, 10),
            },
            {
              where: {
                id: details.productId,
              },
            }
          );
      });

      await sendEmail(user.email, order_priceTotal[0].id, data_total, order_priceTotal[0].price_total );

      } catch (err) {
        console.log(err);
        next(err);
      }
};


const sendEmail = async(email, number_order, data_total, price_total, details)=>{
  try{
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: USER_EMAIL,
          pass: PASS_EMAIL_APP
      }
  });

  const details = {
      from: "City Cell",
      to: email,
      subject: `Recibo de la compra...`,
      text: "Gracias por tu compra, 🔸City Cell🔸",
      html: `<br/><h2 style="color:black">N° de orden: ${number_order}</h2>
      <br /> <h3 style="color:black">${data_total}</h3>       
      <br /><h3>Total: $${price_total}</h3>
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
  }); 
  }catch(err){
      console.log(err);
  }
};


module.exports = paidCart;