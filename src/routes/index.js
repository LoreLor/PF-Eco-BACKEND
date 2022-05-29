var express = require('express');
var router = express.Router();

let routerProducts = require("./products.js");
let routerCategories = require("./categories.js");
let routerUsers = require("./users.js");
let routerCart = require("./cart.js");
let routerReview = require("./review.js")
let routerFavorites = require("./favorites.js")
let routerEmail = require("./emails.js")

router.use("/cart", routerCart);
router.use("/products", routerProducts)
router.use("/categories", routerCategories)
router.use("/user", routerUsers)
router.use("/review", routerReview)
router.use("/favorites", routerFavorites)
router.use("/email", routerEmail)

module.exports = router;
