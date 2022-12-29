const express = require("express");

const { check } = require("express-validator");

const usersContorller = require("../controllers/users-controller");

const router = express.Router();

router.get("/", usersContorller.getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  usersContorller.signupUsers
);

router.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 5 })],
  usersContorller.loginUsers
);

module.exports = router;
