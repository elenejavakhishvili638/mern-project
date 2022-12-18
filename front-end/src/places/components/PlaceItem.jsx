import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import "./placeItem.css";

const PlaceItem = ({ item }) => {
  const [map, setMap] = useState(false);
  const { id, imageUrl, title, description, address, creator, location } = item;

  const openMap = () => {
    setMap(true);
  };

  const closeMap = () => {
    setMap(false);
  };

  return (
    <>
      <Modal
        show={map}
        onCancel={closeMap}
        header={address}
        contentClass="place-item-modal-content"
        footerClass="place-item-modal-actions"
        footer={<Button onClick={closeMap}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>THE MAP</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={openMap}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
