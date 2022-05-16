const Product = require("../../models/Product.js");
const Cart = require("../../models/Cart.js");
const User = require("../../models/User.js");

const getProducts = async (req, res) => {
  const { userId, cart } = req.query;
  ///////////////////////////////////////////////¿ COMO USAR ?///////////////////////////////////////////////////////////////////
  //Se mandan un body con 2 propiedades                                                                                        //
  //               1) userId <-- el id del usuario que quiere acceder a su carrito                                             //
  //               2) cart <---- debe contener un string 'actual' o 'all'                                                      //
  //                             'actual'<- devuelve el carrito que se esta usando en este momento                             //
  //                             'all'<---- devuelve todos los carritos asociados al usuario, sirve para obtener el historial  //
  //Ejemplo de ruta -->  localhost:3001/cart?userId='1'&&cart='all'  <--                                                       //
  ///////////////////////////////////////////////////////// // //////////////////////////////////////////////////////////////////

  if (userId && cart === "actual") {
    const carro = getCarrito(userId);
    res.send(carro);
  } else if (userId && cart === "all") {
    const all_carritos = await Cart.findAll({ where: { userId } });
    res.send(all_carritos);
  } else {
    res.send("manda bien los datos");
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
      payment_method: null,
      date: null,
      status: null,
      open: true,
    });
    return new_carrito;
  }
}
