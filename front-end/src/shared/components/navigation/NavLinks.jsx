import React from "react";
import { NavLink } from "react-router-dom";
import "./navLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="nav-link">
        <NavLink to="/" exact>
          all users
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/u1/places">my places</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/places/new">add places</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/auth">authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
