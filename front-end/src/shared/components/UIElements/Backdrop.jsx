import React from "react";
import ReactDOM from "react-dom";
import "./backDrop.css";

const Backdrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
