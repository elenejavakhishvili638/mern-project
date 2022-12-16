import React from "react";
import { NavLink } from "react-router-dom";
import "./navLinks.css";

const NavLinks = ({ onClick }) => {
  return (
    <ul className="nav-links">
      <li className="nav-link">
        <NavLink to="/" onClick={onClick} exact="true">
          all users
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/u1/places" onClick={onClick}>
          my places
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/places/new" onClick={onClick}>
          add places
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/auth" onClick={onClick}>
          authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
