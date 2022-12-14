import React from "react";
import UsersList from "../components/UsersList";
import "./user.css";

const User = () => {
  const users = [
    {
      id: "u1",
      name: "Elo",
      places: 5,
      image:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    },
    {
      id: "u2",
      name: "Elo",
      places: 5,
      image:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    },
  ];
  return (
    <div>
      <UsersList items={users} />
    </div>
  );
};

export default User;
