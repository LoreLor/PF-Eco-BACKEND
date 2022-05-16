const Cart = require("../../models/Cart.js");
const Product = require("../../models/Product.js");
const User = require("../../models/User.js");

const addProductCart = async (req, res) => {
  try {
    const { userId, productId } = req.query;

    //Verificamos que el usuario tenga un carrito disponible creado
    const usuarioTieneCarrito = await User.findOne({
      where: {
        id: userId,
      },
      include: {
        model: Cart,
        where: {
          open: true,
        },
      },
    });

    //Verificamos que el producto exista
    const productoExiste = await Product.findOne({
      where: {
        id: productId,
      },
    });

    //Verificar si el producto ya se encuentra dentro del carrito
    const productoYaExiste = await User.findOne({
      where:{
        id: userId,
      },
      include: {
        model: Cart,
        include: {
          model: Product,
          where:{
            id: productId,
          }
        }
      }
    });

    if (!usuarioTieneCarrito) {
      //Si el usuario no tiene un carrito disponible, creamos uno
      const nuevoCarrito = await Cart.create({
        payment_method: null,
        date: null,
        status: null,
        oppen: true,
        userId: userId,
      });

      const productoAgregado = await Cart.findOne({
        where: {
          userId: userId,
        },
      });

      await productoExiste.addCart(productoAgregado);
      res.send("Producto añadido al carrito");

    } else if (!productoExiste) {
      res.send("El producto no esta a la venta");

    }else if(productoYaExiste.carts < 1 && usuarioTieneCarrito && productoExiste){
      const productoAgregado = await Cart.findOne({
        where: {
          userId: userId,
        },
      });

      await productoExiste.addCart(productoAgregado);
      res.send("Producto agregado al carrito");

    } else {
      res.send("El producto ya se encuentra en el carrito");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = addProductCart;

/* {
    "name": "alex",
    "last_name": "correa",
    "user_name": "luciferAlex",
    "email": "jaja@hotmail.com",
    "password": "12345",
    "dni": 12345,
    "phone_number": "1100112230",
    "address": "calle trucha 123",
    "rol": "user",
    "birthday": "2022-01-01"
  } */

  /*
        const user = await User.findOne({
        where: {
          id: userId,
        },
        include: {
          model: Cart,
          include: {
            model: Product,
          },
        },
      });

      res.send(user);
  
  */
