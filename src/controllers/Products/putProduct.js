const cloudinary = require('../../middleware/cloudinary.js')
const fs = require('fs')

const Product = require("../../models/Product.js");
const Category = require("../../models/Category.js");

const convertToInt = require("../../utils/convertToInt.js");

const cloudinaryMethod = async (file) =>{
   return new Promise (resolve=>{
       cloudinary.uploader.upload(file,(err,res)=>{
           if(err) return res.status(500).send("Upload fail")
           resolve({
               res: res. secure_url
           })
       })
   })
}

const putProduct = async (req, res, next) => {
   const { id } = req.params;
   const {input} = req.body
   const formData = JSON.parse(input)
   const { name, img, price, description, stock,categories,isActive } = formData;
   // Si alguno de los datos del formulario llega vacío, retorna "Check the fields".
   if (!name || /* !img || */ !price || !description || !stock || !categories /* || !isActive */) return res.status(400).json({msg:"Check the fields."})
   try {
      const urls = [];
      const files = req.files;
      for(const file of files){
          const {path} = file;
          const newPath = await cloudinaryMethod(path)
          urls.push(newPath.res)
          fs.unlinkSync(path)
      }     
      
         // Actualizo el producto con los datos que llegan del formulario.
         let productEdited = await Product.update({
            name: name,
            price:convertToInt(price),
            img: [...img,...urls],
            description: description,
            stock: convertToInt(stock),
            isActive,
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
               name: categories,
            }
         })
         product.removeCategories();
         product.setCategories(categoriesID)
         product.save();

         res.status(201).json({ msg: "Product edited", name: product.name });
   } catch (error) {
      next(error);
   }
}

module.exports = putProduct;