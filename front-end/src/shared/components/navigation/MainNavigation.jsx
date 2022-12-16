import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./mainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { FaBars } from "react-icons/fa";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = () => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const openDrawer = () => {
    setSideDrawer(true);
  };

  const closeDrawer = () => {
    setSideDrawer(false);
  };

  return (
    <>
      {sideDrawer && <Backdrop onClick={closeDrawer} />}
      {/* {sideDrawer && (
      )} */}
      <SideDrawer show={sideDrawer} onClick={closeDrawer}>
        <nav className="drawer-nav">
          <NavLinks onClick={closeDrawer} />
        </nav>
      </SideDrawer>
      <MainHeader>
        {/* <button className="main-navigation"></button> */}
        <FaBars className="main-navigation" onClick={openDrawer} />
        {/* <span></span>
          <span></span>
          <span></span> */}

        <h1 className="navigation-title">
          <Link to="/places/new">Your Places</Link>
        </h1>
        <nav className="nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
