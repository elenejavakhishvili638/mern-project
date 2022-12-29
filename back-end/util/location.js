let nodeGeocoder = require("node-geocoder");
const HttpError = require("../models/http-error");

const getCoordsForAddress = async (address) => {
  // let data = {};
  let options = {
    provider: "openstreetmap",
  };

  let geoCoder = nodeGeocoder(options);

  let data = {};

  try {
    let res = await geoCoder.geocode(address);
    data = { lat: res[0].latitude, lng: res[0].longitude };
    // console.log("res", data[0].latitude);
  } catch (error) {
    console.log(error);
  }

  if (!data) {
    const error = new HttpError(
      "Could not find location for the specified address",
      422
    );
    throw error;
  }
  const coordinates = data;

  return coordinates;

  //   return {
  //     lat: 40.7484474,
  //     lng: -73.9871516,
  //   };
};

module.exports = getCoordsForAddress;
