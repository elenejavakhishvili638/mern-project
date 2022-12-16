import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import "./placeItem.css";

const PlaceItem = ({ item }) => {
  const { id, imageUrl, title, description, address, creator, location } = item;
  return (
    <li className="place-item">
      <Card className="place-item-wrapper">
        <div className="place-item-image">
          <img alt={title} src={imageUrl} />
        </div>
        <div className="place-item-description">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item-actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
