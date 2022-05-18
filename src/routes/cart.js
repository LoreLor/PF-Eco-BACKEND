var express = require("express");
var router = express.Router();

let test = require("../controllers/Cart/test.js")

let getProducts = require("../controllers/Cart/getProducts")
//let getProductsCart = require("../controllers/Cart/getProductsCart")
let addProductCart = require("../controllers/Cart/addProductCart")
// let putProduct = require("../controllers/Cart/putProductCart")
let deleteProduct = require("../controllers/Cart/deleteProductCart")

router.get("/test", test)

router.post("/", addProductCart)
router.delete("/", deleteProduct)
//router.get("/", getProducts)

//router.get("/products-cart", getProductsCart)
// router.put("/products-cart/:productId", putProduct)

module.exports = router; 