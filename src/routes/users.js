var express = require("express");
var router = express.Router();

const postUser = require("../controllers/Users/postUser");
//const getUser = require("../controllers/Users/getUser");
//const deleteUser = require("../controllers/Users/deleteUser");
//const putUser = require("../controllers/Users/putUser");

router.post("/", postUser);
//router.get("/", getUser);
//router.delete("/", deleteUser);
//router.put("/", putUser);

module.exports = router;