const addUser = require("../../services/Users/postUser");

const postUser = (req, res) => {
    const user = {
        name: req.body.name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        dni: req.body.dni,
        phone_number: req.body.phone_number,
        address: req.body.address,
        rol: req.body.rol,
        birthday: req.body.birthday, 
    }

    if(!user.name || !user.last_name || !user.user_name || !user.email 
        || !user.password || !user.address){
        res.status(400).json({msg: "Faltan datos"});
        }else addUser(user, req, res);
}

module.exports = postUser;