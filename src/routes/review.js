var express = require("express");
var router = express.Router();

let getReviews = require("../controllers/Review/getReviews")
// let getReviewsByUser = require("../controllers/Review/getReviewsByUser")
// let getReviewsByProduct = require("../controllers/Review/getReviewsByProduct")



router.get("/", getReviews)
// router.get("/user/:id", getReviewsByUser)
// router.get("/product/:id", getReviewsByProduct)


module.exports = router;  