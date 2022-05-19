var express = require("express");
var router = express.Router();

let getReviews = require("../controllers/Review/getReviews")
let getReviewsOfProduct = require("../controllers/Review/getReviewsOfProduct")
let postReview = require("../controllers/Review/postReview")



router.get("/", getReviews)
router.get("/product", getReviewsOfProduct)
router.post("/", postReview)


module.exports = router;  