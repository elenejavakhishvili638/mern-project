import React from "react";
import "./userItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

const UserItem = ({ item }) => {
  const { id, name, image, places } = item;
  return (
    <li className="user-item-container">
      <Card className="user-item">
        <Link to={`/${id}/places`}>
          <div className="user-item-image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item-description">
            <h2>{name}</h2>
            <p>
              {places < 2 ? "Place" : "Places"} visited: {places}
            </p>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
