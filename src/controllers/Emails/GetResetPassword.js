const User = require("../../models/User");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "e-commerceCitYCelL_PF"


const get_reset_password = async (req, res, next) => {
    const {id, token} = req.params;
  
    const user = await User.findOne({
        where: {
            id: id
        }
    })

    if(!user){
      res.send("ID invalido...")
      return;
    }
  
    const secret = JWT_SECRET + user.password;
    try{
      const payload = jwt.verify(token, secret);
      
      if(payload){
        res.render('reset-password');   
      }else {
        res.send("Token no valido...")
      };
  
    }catch(err){
      console.log(err.message)
      res.send(err.message)
    } 
}

module.exports = get_reset_password;