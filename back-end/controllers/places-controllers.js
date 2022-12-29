const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "one of the most famous sky scrapers in the world",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th st, new york, ny 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  //   console.log(req);
  const place = DUMMY_PLACES.find((item) => {
    return item.id === placeId;
  });
  if (!place) {
    // error.code = 404;
    throw new HttpError("Could not find a place for the provided id.", 404);
  }
  res.json({ place: place });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  //   console.log(req.params.uid);
  const places = DUMMY_PLACES.filter((item) => {
    return item.creator === userId;
  });
  if (!places || places.length === 0) {
    const error = new HttpError(
      "Could not find a places for the provided user id.",
      404
    );
    // error.code = 404;
    return next(error);
    // throw error;
  }
  res.json({ places: places });
};

const createPlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

const patchPlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const { title, description } = req.body;
  const placeId = req.params.pid;

  //spread operator to take out properties of the object
  const patchedPlace = {
    ...DUMMY_PLACES.find((item) => {
      return item.id === placeId;
    }),
  };
  //   console.log(patchedPlace);
  const placeIndex = DUMMY_PLACES.findIndex((item) => item.id === placeId);
  patchedPlace.title = title;
  patchedPlace.description = description;

  DUMMY_PLACES[placeIndex] = patchedPlace;

  res.status(200).json({ place: patchedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;

  if (!DUMMY_PLACES.find((item) => item.id === placeId)) {
    throw new HttpError("Could not find a place for that id", 404);
  }

  const place = DUMMY_PLACES.filter((item) => {
    return item.id !== placeId;
  });

  res.status(200).json({ message: "Deleted place.", place });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.patchPlace = patchPlace;
exports.deletePlace = deletePlace;
