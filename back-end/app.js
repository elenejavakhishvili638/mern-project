const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HttpError = require("./models/http-error");

//middleware
const placesRoutes = require("./routes/places-routes");

const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(bodyParser.json());

//if request starts with /api/places we have to make it only on this route, we have to add a filter
app.use("/api/places", placesRoutes);

app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

//this function will be excuted only if the above function throws an error
app.use((error, req, res, next) => {
  if (res.headerSet) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occured!" });
});

mongoose
  .connect(
    "mongodb+srv://user_elene:m68LvWVz65q90Xbg@cluster0.sv8ujol.mongodb.net/places?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080);
  })
  .catch((error) => {
    console.log(error);
  });
