const Product = require("../../models/Product.js");
const Category = require("../../models/Category.js");

const putProduct = async (req, res, next) => {
   const { id } = req.params;
   const { name, img, price, description, stock, rating, categories } = req.body;

   // Si alguno de los datos del formulario llega vacío, retorna "Fields cannot be null".
   if (id && name && img && price && description) {
      // Actualizo el producto con los datos que llegan del formulario.
      let productEdited = await Product.update({
         name,
         img,
         price,
         description,
         stock,
         rating,
      }, {
         where: {
            id,
         }
      });

      // Lógica para actualizar las categorías del producto.
      // Las categorías llegan del formulario en un array, si se modifican o se añaden
      // en esta parte se actualizará dicho array.
      let product = await Product.findByPk(id, {
         include: {
            model: Category,
            attributes: ['name'],
            through: {
               attributes: [],
            }
         }
      })
      let categoriesID = await Category.findAll({
         where: {
            name: categories
         }
      })
      product.removeCategories();
      product.setCategories(categoriesID)
      product.save();

      return res.status(200).send(productEdited + " products were edited.");
   } else {
      return res.status(400).send("Fields cannot be null")
   }
}

module.exports = putProduct;