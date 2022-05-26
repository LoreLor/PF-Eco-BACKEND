var express = require("express");
var router = express.Router();

const postUser = require("../controllers/Users/postUser");
const getUsers = require("../controllers/Users/getUsers");
const getUserByID = require("../controllers/Users/getUserByID");
const deleteUser = require("../controllers/Users/deleteUser");
const putUser = require("../controllers/Users/putUser");
const userSignin = require("../controllers/Users/userSignin");
const statusUser = require("../controllers/Users/statusUser")
const bulkStatus = require("../controllers/Users/bulkStatus")
const google = require("../controllers/Users/userSigninGoogle")

router.post("/", postUser);
router.get("/", getUsers);
router.get("/:id", getUserByID);
router.delete("/:id", deleteUser);
router.put("/:id", putUser);
router.post("/signin", userSignin);
router.put("/status/:id",statusUser)
router.put("/bulk/off",bulkStatus)
router.post('/auth/google', google)

module.exports = router;