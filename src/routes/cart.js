var express = require("express");
var router = express.Router();

let test = require("../controllers/Cart/test.js")

let getProductsCart = require("../controllers/Cart/getProductsCart")
let addProductCart = require("../controllers/Cart/addProductCart")
let deleteProduct = require("../controllers/Cart/deleteProductCart")
// let putProduct = require("../controllers/Cart/putProductCart")
//let getProducts = require("../controllers/Cart/getProducts")


router.get("/:id", getProductsCart)
router.post("/", addProductCart)
router.delete("/", deleteProduct)

//router.get("/", getProducts)
// router.put("/products-cart/:productId", putProduct)

module.exports = router; 