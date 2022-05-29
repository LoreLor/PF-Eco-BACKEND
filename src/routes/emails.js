var express = require("express");
var router = express.Router();

const purchaseEmail = require("../controllers/Emails/PurchaseEmail");
const lowStockAdmin = require("../controllers/Emails/LowStockAdmin");

const get_forgot_password = require("../controllers/Emails/GetForgotPassword");
const post_forgot_password = require("../controllers/Emails/PostForgotPassword");

const get_reset_password = require("../controllers/Emails/GetResetPassword");
const post_reset_password = require("../controllers/Emails/PostResetPassword");

router.post("/sendEmail/:userId", purchaseEmail);
router.post("/lowStockAdmin", lowStockAdmin);

router.get("/forgot-password", get_forgot_password)
router.post("/forgot-password", post_forgot_password)

router.get("/reset-password/:id/:token", get_reset_password)
router.post("/reset-password/:id/:token", post_reset_password)

const jwt = require("jsonwebtoken");
const JWT_SECRET = "e-commerceCitYCelL_PF"


/* router.get("/forgot-password", async(req, res, next)=> {
  res.render("forgot-password");
}) */

//////////////////////////////////////////////////////*
//////////////////////////////////////////////////////*

/* router.post("/forgot-password", (req, res) => {
  const {email} = req.body;
  
  if(email !== user.email){
    res.send("Usuario no registrado")
    return;
  }

  const secret = JWT_SECRET + user.password;
  
  const payload = {
    email: user.email,
    id: user.id
  }

  const token = jwt.sign(payload, secret, {
    expiresIn: '7d'})
    
  //Este link se debe enviar por email al usuario
  const link = `http://localhost:3001/reset-password/${user.id}/${token}`;
  console.log(link)
  res.send("Email enviado!");
}); */

//////////////////////////////////////////////////////*
//////////////////////////////////////////////////////*

/* router.get("/reset-password/:id/:token", (req, res) => {
  const {id, token} = req.params;
  
  if(id !== user.id){
    res.send("Invalid id...")
    return;
  }

  const secret = JWT_SECRET + user.password;
  try{
    const payload = jwt.verify(token, secret);
    
    if(payload){
      res.render('reset-password');   
    }else {
      res.send("Invalid token...")
    };

  }catch(err){
    console.log(err.message)
    res.send(err.message)
  } 

}); */

//////////////////////////////////////////////////////*
//////////////////////////////////////////////////////*

/* router.post("/reset-password/:id/:token", (req, res) => {
  const {id, token} = req.params;
  const {pass, pass2 } = req.body

  if(id !== user.id){
    res.send("Invalid id...")
    return;
  }

  const secret = JWT_SECRET + user.password;
  try{
    const payload = jwt.verify(token, secret);
    user.password = pass;
    
    res.send(user)
  
  }catch(err){
    console.log(err.message)
    res.send(err.message)
  } 


}); */

module.exports = router;