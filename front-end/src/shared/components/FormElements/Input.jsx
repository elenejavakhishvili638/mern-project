import React, { useReducer, useEffect } from "react";
import "./input.css";
import { validate } from "../../../shared/components/Util/validators.js";

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

const Input = (props) => {
  const initailState = {
    value: props.initialValue || "",
    isValid: props.initialValid || false,
    isTouch: false,
  };
  const [state, dispatch] = useReducer(reducer, initailState);

  //   console.log(state);

  const { value, isValid } = state;
  const { id, onInput } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [value, isValid, id, onInput]);

  const handleTouch = () => {
    dispatch({ type: "TOUCH" });
  };

  const handleChange = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const elements =
    props.element === "input" ? (
      <input
        id={id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={state.value}
        onBlur={handleTouch}
      />
    ) : (
      <textarea
        id={id}
        row={props.row || 3}
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
      <label htmlFor={id}>{props.label}</label>
      {elements}
      {!state.isValid && state.isTouch && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
