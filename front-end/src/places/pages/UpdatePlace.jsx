import React from "react";
import "./updatePlace.css";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/Util/validators";
import { useForm } from "../../shared/hooks/form-hook";

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
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const foundPlace = DUMMY_PLACES.find((item) => item.id === placeId);
  const [state, inputHandler] = useForm(
    {
      title: {
        value: foundPlace.value,
        isValid: true,
      },
      description: {
        value: foundPlace.description,
        isValid: true,
      },
    },
    true
  );

  if (!foundPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state.inputs);
  };

  return (
    <form className="place-form" onSubmit={handleSubmit}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={state.inputs.title.value}
        initialValid={state.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={state.inputs.description.value}
        initialValid={state.inputs.description.isValid}
      />
      <Button type="submit" disabled={!state.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
