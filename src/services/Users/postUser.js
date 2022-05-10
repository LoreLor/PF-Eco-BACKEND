const User = require("../../models/User")

const addUser = async(user, req, res)=>{
    try{

        const newUser = await User.create({
            name: user.name,
            last_name: user.last_name,
            user_name: user.user_name,
            email: user.email,
            password: user.password,
            dni: user.dni,
            phone_number: user.phone_number,
            address: user.address,
            rol: user.rol,
            birthday: user.birthday,
        });

        res.status(200).json({
            msg: "Usuario creado",
            user: newUser
        })

    }catch(err){
        console.log(err)
    }
}

module.exports = addUser;