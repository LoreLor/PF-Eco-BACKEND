const cloudinary = require('../../middleware/cloudinary.js')
const fs = require('fs')

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

const testInput =async (req,res,next)=>{
    const {input} = req.body
    const formData = JSON.parse(input)
    console.log(formData)
    console.log(req.files)
    
    try {
    const urls = [];
    const files = req.files;
    for(const file of files){
        const {path} = file;
        const newPath = await cloudinaryMethod(path)
        urls.push(newPath)
        fs.unlinkSync(path)
    }
    res.send({urls,formData})
  } catch (error) {
      console.log(error)
  }
}

module.exports = testInput;