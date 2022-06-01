const Cart = require("../../models/Cart.js");

const sendStatus = async (req,res,next) => {
    const {cartId} = req.params
    const {sendStatus} =req.body
if(!sendStatus){return res.status(400).json({msg:"Missing data"})}

try {
    await Cart.update({
        sendStatus
    },{
        where: {
            id :cartId
        }
    }
    )
    res.status(200).json({
        msg: "Status updated"
    })
} catch (error) {
    next(error)
}
}

module.exports = sendStatus;