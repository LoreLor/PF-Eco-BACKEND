const User = require("../../models/User.js");

const bulkStatus = async (req, res, next) => {
    const { array } = req.body;
   if(array.length === 0){ return res.status(200).json({msg: "Users not selected"})}
    try {
        array.forEach(async user => {
            await User.update({
                isActive: false
            },{
                where: {
                    id: user
                }
            }
            )
        });
        res.status(200).json({
            msg: "Users deactivated"
        })

    } catch (error) {
        next(error)
    }
}

module.exports = bulkStatus;