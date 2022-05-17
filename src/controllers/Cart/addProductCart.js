const Cart = require("../../models/Cart.js");
const Product = require("../../models/Product.js");
const User = require("../../models/User.js");
const Detail = require("../../models/Detail.js");

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
    const productoYaExisteEnElCarrito = await User.findOne({
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

    const cantidad = await Detail.findOne({
      where: {
        productId: productId,
        
      },attributes: ["bundle"],
    });
      
    const cant_product = Object.entries(cantidad);
   
    if (!usuarioTieneCarrito) {
      //Si el usuario no tiene un carrito disponible, creamos uno
      await Cart.create({
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

    }else if(productoYaExisteEnElCarrito.carts < 1 && usuarioTieneCarrito && productoExiste){
      const productoAgregado = await Cart.findOne({
        where: {
          userId: userId,
        },
      });

      await productoExiste.addCart(productoAgregado);

      //Se descuenta la unidad comprada al stock general del producto
      await Product.update({
        stock: productoExiste.stock - 1,
      }, {
        where: {
          id: productId,
        },
      });

      //Ingresar el nuevo dato a los detalles del carrito
      const detalleDeLaCompra = await Detail.create({
        name: productoExiste.name,
        price: productoExiste.price,
        bundle: 1,
        date: new Date(),
        cartId: productoAgregado.id,
        productId: productId,
      });

      res.send(detalleDeLaCompra);

    } else {
      //Actualizar el stock del producto
       await Product.update({
        stock: productoExiste.stock - 1,
      }, {
        where: {
          id: productId,
        },
      }); 

         await Detail.update({
        bundle: cant_product[0][1]["bundle"] + 1
      }, {
        where: {
          productId: productId,
        }, 
      })   

      res.send("El producto ya se encuentra en el carrito, PERO FUE ACTUALIZADO");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = addProductCart;
