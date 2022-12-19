import React from "react";
import "./input.css";

const Input = ({ id, label, element, type, placeholder, row }) => {
  const elements =
    element === "input" ? (
      <input id={id} type={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} row={row || 3} />
    );
  return (
    <div className={`form-control`}>
      <label htmlFor={id}>{label}</label>
      {elements}
    </div>
  );
};

export default Input;
