var express = require("express");
var router = express.Router();

let getReviews = require("../controllers/Review/getReviews")
let getReviewsOfProduct = require("../controllers/Review/getReviewsOfProduct")



router.get("/", getReviews)
router.get("/product/:id", getReviewsOfProduct)


module.exports = router;  