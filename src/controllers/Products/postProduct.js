const cloudinary = require('../../middleware/cloudinary.js')
const fs = require('fs')

const Product = require("../../models/Product.js");
const Category = require("../../models/Category.js");

const normalizeString = require('../../utils/normalizeString.js');
const convertToInt = require("../../utils/convertToInt.js");

const cloudinaryMethod = async (file) =>{
    return new Promise (resolve=>{
        cloudinary.uploader.upload(file,(err,res)=>{
            if(err) return res.status(500).send("Upload fail")
            console.log(res.secure_url)
            resolve({
                res: res. secure_url
            })
        })
    })
}

const postProduct =async (req,res,next)=>{
    const {input} = req.body
    const formData = JSON.parse(input)
    const { name, img, price, description, stock, categories } = formData;
    if (!name || /* !img || */ !price || !description || !stock || !categories) return res.status(400).json({msg:"Check the fields."})
    try {
    const urls = [];
    const files = req.files;
    for(const file of files){
        const {path} = file;
        const newPath = await cloudinaryMethod(path)
        urls.push(newPath.res)
        fs.unlinkSync(path)
    }
    console.log(urls)
    const newProduct = await Product.create({
        name: normalizeString(name),
        price, 
        img: [...img,...urls],
        description, 
        stock: convertToInt(stock),
        rating: convertToInt("0")
     });

     categories.forEach(async (item) => {
        const [newCategory, boolCreate] = await Category.findOrCreate({
           where: {
              name: normalizeString(item),
           }
        });
        await newProduct.addCategory(newCategory);
     })

     res.status(201).json({ msg: "Producto creado exitosamente", name: newProduct.name });
  } catch (error) {
      console.log(error)
  }
}

module.exports = postProduct;