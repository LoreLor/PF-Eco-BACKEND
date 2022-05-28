var express = require("express");
var router = express.Router();

const purchaseEmail = require("../controllers/Emails/PurchaseEmail");
const lowStockAdmin = require("../controllers/Emails/LowStockAdmin");

router.post("/sendEmail/:userId", purchaseEmail);
router.post("/lowStockAdmin", lowStockAdmin);

module.exports = router;