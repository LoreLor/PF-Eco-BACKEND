var express = require("express");
var router = express.Router();

const postUser = require("../controllers/Users/postUser");
const getUsers = require("../controllers/Users/getUsers");
const getUserByID = require("../controllers/Users/getUserByID");
const deleteUser = require("../controllers/Users/deleteUser");
const putUser = require("../controllers/Users/putUser");
const userSignin = require("../controllers/Users/userSignin");
const statusUser = require("../controllers/Users/statusUser")
<<<<<<< HEAD
const bulkStatus = require("../controllers/Users/bulkStatus");
const { Router } = require("express");
const googleLogin = require("../controllers/users/googleLogin")

=======
const bulkStatus = require("../controllers/Users/bulkStatus")
const userProfile = require("../controllers/Users/userProfile")
>>>>>>> 229571044d6a41bd6b10dd4608af023f0d20e006

router.post("/", postUser);
router.get("/", getUsers);
router.get("/:id", getUserByID);
router.delete("/:id", deleteUser);
router.put("/update/:id",userProfile)
router.put("/:id", putUser);
router.post("/signin", userSignin);
router.put("/status/:id",statusUser)
router.put("/bulk/off",bulkStatus);
router.post('/googlelogin', googleLogin)


module.exports = router;