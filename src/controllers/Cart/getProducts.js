const Product = require("../../models/Product.js");
const Cart = require("../../models/Cart.js");
const User = require("../../models/User.js");

const getProducts = async (req, res) => {
  const { userId, cart } = req.query;

  if (userId && cart === "actual") {
    const carro = getCarrito(userId);
    res.send(carro);
  } else if (userId && cart === "all") {
    const all_carritos = await Cart.findAll({ where: { userId } });
    res.send(all_carritos);
  } else {
    res.send("Envio de datos no validos");
  }
};

module.exports = getProducts;

async function getCarrito(userId) {
  const carrito = await Cart.findAll({
    where: {
      userId: userId,
      open: true,
    },
  });
  if (carrito) {
    return carrito;
  } else {
    const new_carrito = await Cart.create({
      date: null,
      status: null,
      open: true,
    });
    return new_carrito;
  }
}
