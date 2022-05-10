var express = require("express");
var router = express.Router();
const getCategories = require("../controllers/Categories/getCategories.js");
const postCategory = require("../controllers/Categories/postCategory.js");
const deleteCategory = require("../controllers/Categories/deleteCategory.js");

router.get('/', getCategories)
router.post('/', postCategory)
router.delete('/:id', deleteCategory)

module.exports = router