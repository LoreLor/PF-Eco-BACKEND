const Product = require("../../models/Product.js");
const Cart = require("../../models/Cart.js");
const User = require("../../models/User.js");
const Detail = require("../../models/Detail.js");

const cartClose = async (req, res, next) => {
  try {
    const { userId, cartId } = req.params;

    const allData = await Cart.findOne({
      where: {
        id: cartId,
        userId: userId,
      },
      include: {
        model: Detail,
        include: {
          model: Product,
        },
      },
    });

    //Actualizar y cerrar el carrito del usuario
    await Cart.update(
      {
        status: "paid",
        date: new Date(),
        open: false,
        price_total: allData.price_total,
      },
      {
        where: {
          id: cartId,
          userId: userId,
        },
      }
    );

    allData.details.forEach(async (details) => {
      await Product.update(
        {
          stock:
            parseInt(allData.details[0].product.stock, 10) -
            parseInt(details.bundle, 10),
        },
        {
          where: {
            id: details.productId,
          },
        }
      );
    });

    //Crear un nuevo carrito al usuario
    await Cart.create({
      payment_method: null,
      date: null,
      status: null,
      open: true,
      userId: userId,
      price_total: 0,
    });

    res.status(200).send("Carro cerrado y stcok actualizado");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = cartClose;
