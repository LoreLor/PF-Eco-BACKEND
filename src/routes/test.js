var express = require("express");
var router = express.Router();
const uploadPictures = require('../middleware/multer.js')

let testInput = require ('../controllers/Products/testImage.js')

router.post('/',uploadPictures(), testInput)

module.exports = router;