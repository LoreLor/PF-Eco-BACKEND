var express = require('express');
var router = express.Router();
let routerProducts = require("./products.js");
let routerCategories = require("./categories.js");

router.use("/products", routerProducts)
router.use("/categories", routerCategories)



module.exports = router;
