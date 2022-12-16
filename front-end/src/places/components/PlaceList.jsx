import React from "react";
import "./placeList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="no-place-list center">
        <Card className="no-place">
          <h2>No places found. Maybe create one?</h2>
          <Button>Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {items.map((item) => (
        <PlaceItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default PlaceList;
