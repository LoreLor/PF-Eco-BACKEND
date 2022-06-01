var express = require("express");
var router = express.Router();

let test = require("../controllers/Cart/test.js")

let getProductsCart = require("../controllers/Cart/getProductsCart")
let addProductCart = require("../controllers/Cart/addProductCart")
let deleteProduct = require("../controllers/Cart/deleteProductCart")
// let putProduct = require("../controllers/Cart/putProductCart")
//let getProducts = require("../controllers/Cart/getProducts")
let deleteAll = require("../controllers/Cart/deleteAll")
let paidCart = require("../controllers/Cart/paidCart")
let myCarts = require("../controllers/Cart/myCarts")
let getAllCartsPaid = require("../controllers/Cart/getAllCartsPaid")
let cartClose = require("../controllers/Cart/cartClose")
let sendStatus = require("../controllers/Cart/sendStatus")
let applyDiscount = require("../controllers/Cart/applyDiscount")

router.get("/:id", getProductsCart)
router.post("/", addProductCart)
router.delete("/", deleteProduct)
router.delete("/all", deleteAll)
router.put("/", paidCart)
router.get("/", myCarts)
router.get("/paid/all", getAllCartsPaid)
router.put("/status/:cartId", sendStatus)
router.put("/close/:userId/:cartId", cartClose);
router.put("/discount/", applyDiscount);

//router.get("/", getProducts)
// router.put("/products-cart/:productId", putProduct)

module.exports = router; 