var express = require("express");
var router = express.Router();
const getCategories = require("../controllers/Categories/getCategories.js");
const getCategory = require('../controllers/Categories/getCategory.js')
const postCategory = require("../controllers/Categories/postCategory.js");
const bulkCategories = require("../controllers/Categories/bulkCategories.js")
const deleteCategory = require("../controllers/Categories/deleteCategory.js");
const putCategory = require("../controllers/Categories/putCategory.js");

router.get('/', getCategories)
router.get('/:name', getCategory)
router.post('/', postCategory)
router.post('/bulk', bulkCategories)
router.delete('/:id', deleteCategory)
router.put("/:id", putCategory)

module.exports = router