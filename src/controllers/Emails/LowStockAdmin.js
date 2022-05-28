const Product = require("../../models/Product.js");
const User = require("../../models/User");

const {USER_EMAIL,
    PASS_EMAIL_APP} = process.env;
    

const nodemailer = require("nodemailer");

const lowStockAdmin = async(req, res, next)=>{
    try{
        const admins = await User.findAll({
            where:{
                rol: "admin"
            }
        });
        let emailAdmins = admins.map(el => el.email)
        
        let allProducts = await Product.findAll();
        let lowStcokProducts = allProducts.filter(el => el.stock <= 10);
        let dataLowStcokProducts = lowStcokProducts.map(el =>{
            return({
                id: el.id,
                name: el.name,
                stock: el.stock,
                img: el.img
            })
        }) 


        ////////*

        let cadena = dataLowStcokProducts.map(el => `ID: ${el.id} 
         Name product: ${el.name} 
         Sctock ${el.stock} 
         Image product: ${el.img} \n`)
        

        let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: PASS_EMAIL_APP
            }
        });
    
        let details = {
            from: "City Cell",
            to: emailAdmins,
            subject: `Notificacion de stock bajo...`,
            text: `${cadena}`
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

module.exports = lowStockAdmin;