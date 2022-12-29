const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Elo",
    places: 5,
  },
  {
    id: "u2",
    name: "El0o",
    places: 9,
  },
];

const getUsers = (req, res, next) => {
  if (!DUMMY_USERS || DUMMY_USERS.length === 0) {
    throw new HttpError("Could not find an user for the provided id.", 404);
  }
  res.json({ users: DUMMY_USERS });
};

const signupUsers = (req, res, next) => {
  const { name, places } = req.body;

  const newUser = {
    id: uuidv4(),
    name,
    places,
  };

  DUMMY_USERS.push(newUser);

  res.status(202).json({ user: newUser });
};

// const loginUsers = (req, res, next) => {

// };

exports.getUsers = getUsers;
exports.signupUsers = signupUsers;
exports.loginUsers = loginUsers;
