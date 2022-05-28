const User = require("../../models/User.js");
const bcrypt = require("bcryptjs")

const userProfile = async (req, res, next) => {

    const { id } = req.params;
    const { 
        name, last_name, 
        user_name, 
        email, birthday,

        prev_password, new_password, conf_password,

        address, phone_number, 
        } = req.body;
        
    try {
        if(name,last_name,user_name,email,birthday){
            await User.update({
                name,last_name,
                user_name,
                email,birthday
            }, {
                where: {
                    id:id
                }
            });
            let updated = await User.findOne({
                where: {
                    id
                }
                
            })
            return res.status(200).json({msg:"Profile data updated",user:updated})
        }
        if(prev_password,new_password,conf_password){
            const user = await User.findOne({
                where: {
                    id: id,
                }
            });
            if(user){
                if(bcrypt.compareSync(prev_password,user.password)){
                    await User.update({
                        password : bcrypt.hashSync(new_password, 8),
                    },{
                        where: {
                            id
                        }
                    })

                    let updated = await User.findOne({
                        where: {
                            id
                        }
                    })
                    return res.status(200).json({msg:"Password updated"})
                }
                return res.status(200).json({msg:"Password incorrect"})
            }
        }
        if(address,phone_number){
            await User.update({
                address,phone_number
            }, {
                where: {
                    id:id
                }
            });
            let updated = await User.findOne({
                where: {
                    id
                }
            })
            return res.status(200).json({msg:"Shipping data updated",user:updated})
        }
    } catch (error) {
        next(error)
    }

}

module.exports = userProfile