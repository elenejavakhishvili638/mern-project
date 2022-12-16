import React from "react";
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
        <div className="palce-item-description">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item-actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
