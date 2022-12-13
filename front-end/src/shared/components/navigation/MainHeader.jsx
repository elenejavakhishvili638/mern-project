import React from "react";
import "./mainHeader.css";

const MainHeader = ({ children }) => {
  console.log(children);
  return <div className="main-header">{children}</div>;
};

export default MainHeader;
