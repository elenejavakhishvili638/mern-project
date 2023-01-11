const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Elo",
    email: "test@test.com",
    password: "testers",
  },
];

const getUsers = (req, res, next) => {
  if (!DUMMY_USERS || DUMMY_USERS.length === 0) {
    throw new HttpError("Could not find an user for the provided id.", 404);
  }
  res.json({ users: DUMMY_USERS });
};

const signupUsers = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { name, email, password } = req.body;

  let hasUser;
  try {
    hasUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (hasUser) {
    const error = new HttpError(
      "Could not create user, email aleady exists",
      422
    );
    return next(error);
  }

  const newUser = new User({
    name,
    email,
    password,
    image: "ooo",
    places: req.body.places,
  });

  try {
    newUser.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, please try again later.",
      500
    );
  }

  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

const loginUsers = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { email, password } = req.body;

  let foundUser;
  try {
    foundUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!foundUser || foundUser.password !== password) {
    return next(
      new HttpError(
        "Could not identify user, credentials seem to be wrong",
        401
      )
    );
  }

  res.json({ message: "Logged in" });
};

exports.getUsers = getUsers;
exports.signupUsers = signupUsers;
exports.loginUsers = loginUsers;
