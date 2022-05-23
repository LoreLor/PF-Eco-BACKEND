const User = require("../../models/User.js");

//const normalizeString = require('../../utils/normalizeString.js');

const putUser = async (req, res, next) => {
    const { id } = req.params;
    const { name,last_name, user_name, email, phone_number, address} = req.body;
    try {
       await User.update({
            name,
            last_name,
            user_name,
            email,
            phone_number,
            address
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
        res.status(200).send(
             r
        );

    } catch (err) {
        next(err)
    }
}

module.exports = putUser;