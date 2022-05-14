var express = require('express');
var router = express.Router();

let routerProducts = require("./products.js");
let routerCategories = require("./categories.js");
let routerUsers = require("./users.js");


router.use("/products", routerProducts)
router.use("/categories", routerCategories)
router.use("/user", routerUsers)


module.exports = router;
