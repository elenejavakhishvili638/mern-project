import React from "react";
import PlaceList from "../components/PlaceList";
import "./userPlace.css";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "fdsdfhergdzvbn",
    description: "dajfnsijnfisu",
    imageUrl:
      "https://media.istockphoto.com/id/1031134536/photo/the-old-town-of-tbilisi-georgia.webp?s=612x612&w=is&k=20&c=xp53kjf0as7gwb6MojtCgvwIKNrzCjk6WFFP1ATGaaQ=",
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
    imageUrl:
      "https://media.istockphoto.com/id/486334510/photo/new-york-city-skyline.jpg?s=612x612&w=0&k=20&c=RkcUiEmZYarBPnQW8qm7GUJEegE24Molcl2ijMlY3kQ=",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UserPlace = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((item) => item.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlace;
