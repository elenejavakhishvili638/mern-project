import React from "react";
import "./card.css";

const Card = ({ children, className, style }) => {
  // console.log(children);
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
