var express = require("express");
var router = express.Router();

let getReviews = require("../controllers/Review/getReviews")
let getReviewsByUser = require("../controllers/Review/getReviewsByUser")
let getReviewsOfProduct = require("../controllers/Review/getReviewsOfProduct")



router.get("/", getReviews)
router.get("/user/:id", getReviewsByUser)
router.get("/product/:id", getReviewsOfProduct)


module.exports = router;  