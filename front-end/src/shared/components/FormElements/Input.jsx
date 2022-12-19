import React, { useReducer } from "react";
import "./input.css";
import { validate } from "../../../shared/components/Util/validators.js";

const initailState = {
  value: "",
  isValid: false,
  isTouch: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    default:
      return state;
    case "TOUCH":
      return {
        ...state,
        isTouch: true,
      };
  }
};

const Input = ({
  id,
  label,
  element,
  type,
  placeholder,
  row,
  errorText,
  validators,
}) => {
  const [state, dispatch] = useReducer(reducer, initailState);

  //   console.log(state);

  const handleTouch = () => {
    dispatch({ type: "TOUCH" });
  };

  const handleChange = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: validators,
    });
  };

  const elements =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={state.value}
        onBlur={handleTouch}
      />
    ) : (
      <textarea
        id={id}
        row={row || 3}
        onChange={handleChange}
        value={state.value}
        onBlur={handleTouch}
      />
    );
  return (
    <div
      className={`form-control ${
        !state.isValid && state.isTouch && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {elements}
      {!state.isValid && state.isTouch && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
