import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./mainNavigation.css";

const MainNavigation = ({}) => {
  return (
    <MainHeader>
      <button className="main-navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="navigation-title">
        <Link to="/places/new">Your Places</Link>
      </h1>
      <nav className="nav">...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
