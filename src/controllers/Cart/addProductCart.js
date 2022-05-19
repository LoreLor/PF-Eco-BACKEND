const Cart = require("../../models/Cart.js");
const Product = require("../../models/Product.js");
const User = require("../../models/User.js");
const Detail = require("../../models/Detail.js");

const addProductCart = async (req, res, next) => {
  try {
    const { userId, productId, required_quantity } = req.query;

    //Verifica que el usuario disponga de un carrito disponible
    const userHasCart = await User.findOne({
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

    //Verifica si el producto existe en la base de datos
    const producExists = await Product.findOne({
      where: {
        id: productId,
      },
    });

    //Verificar si el producto ya se encuentra dentro del carrito 
    const productInCart = await User.findOne({
      where: {
        id: userId,
      },
      include: {
        model: Cart,
        include: {
          model: Product,
          where: {
            id: productId,
          },
        },
      },
    });

    if (!userHasCart) {
      await Cart.create({
        payment_method: null,
        date: null,
        status: null,
        oppen: true,
        userId: userId,
      });

      const cart = await searchCart(userId)

      await producExists.addCart(cart);

      //Ingresar el nuevo dato a los detalles del carrito
      const purchaseDetails = await Detail.create({
        name: producExists.name,
        img: producExists.img[0],
        price: producExists.price,
        price_total: producExists.price * required_quantity,
        bundle: required_quantity,
        stock: producExists.stock,
        date: new Date(),
        cartId: cart.id,
        productId: productId,
      });

      res.send(purchaseDetails);

    } else if (productInCart.carts < 1 && userHasCart && producExists) {
     const cart = await searchCart(userId)

      await producExists.addCart(cart);

      //Ingresar el nuevo dato a los detalles del carrito
      const purchaseDetails = await Detail.create({
        name: producExists.name,
        img: producExists.img[0],
        price: producExists.price,
        price_total: producExists.price * required_quantity,
        bundle: required_quantity,
        stock: producExists.stock,
        date: new Date(),
        cartId: cart.id,
        productId: productId,
      });

      res.send(purchaseDetails);

    } else {
        await Detail.update({
        bundle: required_quantity,
        price_total: producExists.price * required_quantity,
      }, {
        where: {
          productId: productId,
        }, 
      })  

      res.status(200).send(`Producto actualizado, la cnatidad actualizada pasa a ser de: ${required_quantity}`);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = addProductCart;

const searchCart = async(userId) => {
  try{
    const r = await Cart.findOne({
      where: {
        userId: userId,
      },
    });

    return r;
  }catch(err){
    console.log(err)
  }
};