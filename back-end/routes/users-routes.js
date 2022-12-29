const express = require("express");

const usersContorller = require("../controllers/users-controller");

const router = express.Router();

router.get("/", usersContorller.getUsers);

router.post("/signup", usersContorller.signupUsers);

router.post("/login", usersContorller.loginUsers);

module.exports = router;
