var express = require("express");
var router = express.Router();

const purchaseEmail = require("../controllers/Emails/PurchaseEmail");
const lowStockAdmin = require("../controllers/Emails/LowStockAdmin");
const get_forgot_password = require("../controllers/Emails/GetForgotPassword");
const post_forgot_password = require("../controllers/Emails/PostForgotPassword");
const get_reset_password = require("../controllers/Emails/GetResetPassword");
const post_reset_password = require("../controllers/Emails/PostResetPassword");

router.post("/sendEmail/:userId/:cartId", purchaseEmail);
router.post("/lowStockAdmin", lowStockAdmin);
router.get("/forgot-password", get_forgot_password)
router.post("/forgot-password", post_forgot_password)
router.get("/reset-password/:id/:token", get_reset_password)
router.post("/reset-password/:id/:token", post_reset_password)

module.exports = router;