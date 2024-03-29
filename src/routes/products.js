var express = require("express");
var router = express.Router();
const uploadPictures = require('../middleware/multer.js')

let getProducts = require('../controllers/Products/getProducts.js')
let postProduct = require('../controllers/Products/postProduct.js')
let bulkProducts = require('../controllers/Products/bulkProducts.js')
let putProduct = require('../controllers/Products/putProduct.js')
let deleteProduct = require('../controllers/Products/deleteProduct.js');
const getProductByID = require("../controllers/Products/getProductByID");


router.get('/', getProducts);
router.get('/:id', getProductByID);
router.post('/',uploadPictures(), postProduct);
router.post('/bulk', bulkProducts);
router.put('/:id',uploadPictures(), putProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
