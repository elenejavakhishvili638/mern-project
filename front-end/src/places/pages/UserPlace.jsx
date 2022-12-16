import React from "react";
import PlaceList from "../components/PlaceList";
import "./userPlace.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "fdsdfhergdzvbn",
    description: "dajfnsijnfisu",
    imageUrl: "",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "fdsdfhergdzvbn",
    description: "dajfnsijnfisu",
    imageUrl: "",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UserPlace = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlace;
