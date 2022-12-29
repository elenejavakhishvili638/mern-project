const express = require("express");

const { check } = require("express-validator");

const usersContorller = require("../controllers/users-controller");

const router = express.Router();

router.get("/", usersContorller.getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  usersContorller.signupUsers
);

router.post("/login", usersContorller.loginUsers);

module.exports = router;
