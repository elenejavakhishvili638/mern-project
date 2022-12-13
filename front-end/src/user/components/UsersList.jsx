import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./usersList.css";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="no-user">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <ul className="user-list">
        {items.map((item) => {
          return <UserItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default UsersList;
