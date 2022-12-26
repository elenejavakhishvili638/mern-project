import React from "react";
import { NavLink } from "react-router-dom";
import "./navLinks.css";
import { useAuthContext } from "../../context/auth-context";

const NavLinks = ({ onClick }) => {
  console.log(useAuthContext());
  const { isLoggedIn, logout } = useAuthContext();
  return (
    <ul className="nav-links">
      <li className="nav-link">
        <NavLink to="/" onClick={onClick} exact="true">
          all users
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className="nav-link">
          <NavLink to="/u1/places" onClick={onClick}>
            my places
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li className="nav-link">
          <NavLink to="/places/new" onClick={onClick}>
            add places
          </NavLink>
        </li>
      )}
      {!isLoggedIn ? (
        <li className="nav-link">
          <NavLink to="/auth" onClick={onClick}>
            authenticate
          </NavLink>
        </li>
      ) : (
        <li className="nav-link">
          <button onClick={() => logout()}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
