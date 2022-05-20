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

const postProduct =async (req,res,next)=>{
    const {input} = req.body
    const formData = JSON.parse(input)
    const { name, img, price, description, stock, categories} = formData;
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
    const newProduct = await Product.create({
        name,
        price:convertToInt(price), 
        img: [...img,...urls],
        description, 
        stock: convertToInt(stock),
     });

     categories.forEach(async (item) => {
        const [newCategory, boolCreate] = await Category.findOrCreate({
           where: {
              name:item,
           }
        });
        await newProduct.addCategory(newCategory);
     })

     res.status(201).json({ msg: "Product created", name: newProduct.name });
  } catch (error) {
      next(error)
  }
}

module.exports = postProduct;