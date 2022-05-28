const { response } = require('express');
const {OAuth2Client} = require('google-auth-library');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const client = new OAuth2Client(process.env.CLIENT_SECRET)



const googleLogin = (req, res) =>{
    const{idToken} = req.body;
    console.log('credential', idToken)
     
    client.verifyIdToken({idToken, audience: process.env.REACT_APP_GOOGLE_CLIENT_ID})
        .then(response=>{
             const {email_verified, name , email} = response.payload;     
                console.log('response.payload', response.payload)

        if(email_verified){
            const user = User.findOne({where:{email: email}})
            if(user){
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }, process.env.JWT_KEY || 'secret', {expiresIn: '7d'})             
                res.json({
                    token, 
                    user
                })
            }else{
                res.status(400).json({msg:'Somthing went wrong'})
            }
        }else{

            //si no existe me creo el usuario
            let password  = email+process.env.JWT_KEY;
            const userNew = User.create({
              name,
              email: email,
              password: bcrypt.hashSync(password, 8),
            });
            res.status(201).send(userNew);
          }
        
        })
      }

module.exports = googleLogin