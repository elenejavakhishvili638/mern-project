const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");

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

const signupUsers = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((item) => item.email === email);
  if (hasUser) {
    throw new HttpError("Could not create user, email aleady exists", 422);
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(newUser);

  res.status(201).json({ user: newUser });
};

const loginUsers = (req, res, next) => {
  const { email, password } = req.body;

  const foundUser = DUMMY_USERS.find((item) => item.email === email);
  if (!foundUser || foundUser.password !== password) {
    throw new HttpError(
      "Could not identify user, credentials seem to be wrong",
      401
    );
  }

  res.json({ message: "Logged in" });
};

exports.getUsers = getUsers;
exports.signupUsers = signupUsers;
exports.loginUsers = loginUsers;
