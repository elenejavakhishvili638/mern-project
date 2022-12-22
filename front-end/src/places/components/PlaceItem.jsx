import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import "./placeItem.css";

const PlaceItem = ({ item }) => {
  const [map, setMap] = useState(false);
  const { id, imageUrl, title, description, address, creator, location } = item;
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMap = () => {
    setMap(true);
  };

  const closeMap = () => {
    setMap(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETEING...");
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
          {/* <h2>THE MAP</h2> */}
          <Map center={location} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that can't
          be undone thereafter
        </p>
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
            <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
