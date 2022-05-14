const multer = require('multer')
const uuid = require('uuid')
var path = require('path');

function uploadPictures(){
    const storage = multer.diskStorage({
        destination:path.join(__dirname,'../../public/uploads'),
        filename: (req,file,cb)=>{
           var ext = file.mimetype.split("/")[1]
            cb(null, uuid.v4() + "." + ext)
        }
})

const upload = multer({
    storage,
     limits:{fileSize: 2000000, files: 5},
     fileFilter: (req,file,cb)=>{
         let type = file.mimetype.startsWith("image/");
         type? cb(null,true): cb(new Error("El archivo no es una imagen"),false)
     }}
    ).array("file")
return upload
}

module.exports = uploadPictures;