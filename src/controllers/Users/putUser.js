const User = require("../../models/User.js");

//const normalizeString = require('../../utils/normalizeString.js');

const putUser = async (req, res, next) => {
   
    try {

        const { id } = req.params;
        const { name, last_name, user_name, email, password, dni, phone_number, address, birthday, payment_method } = req.body;

        await User.update({
            name,
            last_name,
            user_name,
            email,
            password,
            dni,
            phone_number,
            address,
            payment_method,
            birthday
        }, {
            where: {
                id:id
            }
        });

        let r = await User.findOne({
            where: {
                id
            }
        })
        r.save()
        res.status(200).send(r)

    } catch (err) {
        next(err)
    }
}

module.exports = putUser;