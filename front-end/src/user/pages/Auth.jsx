import React from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/Util/validators";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import "./auth.css";

const Auth = () => {
  const [state, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(state.inputs);
  };

  return (
    <Card className="authentication" style={{ background: "white" }}>
      <h2 className="authentication-header">Login Required</h2>
      <hr />
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password at least five characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!state.isValid}>
          REGISTER
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
