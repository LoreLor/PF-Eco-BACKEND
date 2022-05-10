var express = require("express");
var router = express.Router();
let getProducts = require('../controllers/Products/getProducts.js')
let postProduct = require('../controllers/Products/postProduct.js')
let putProduct = require('../controllers/Products/putProduct.js')

router.get('/:id', getProducts);
router.get('/', getProducts);
router.post('/', postProduct);
router.put('/:id', putProduct);

module.exports = router;
