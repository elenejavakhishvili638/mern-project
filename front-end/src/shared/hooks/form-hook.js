import { useReducer, useCallback } from "react";

// {
//     title: {
//       value: "",
//       isValid: false,
//     },
//     description: {
//       value: "",
//       isValid: false,
//     },
//     address: {
//       value: "",
//       isValid: false,
//     },
//   },

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        //if any whetre in form validity is false the whole form validity will be false
        //action.id ????
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      // console.log(action);
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (initailState, initialFormValidity) => {
  const [state, dispatch] = useReducer(reducer, {
    inputs: initailState,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return [state, inputHandler];
};
