import React, { useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/Util/validators";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import "./auth.css";
import { useAuthContext } from "../../shared/context/auth-context";

const Auth = () => {
  const { isLoggedIn, login } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);
  const [state, inputHandler, setFormData] = useForm(
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
    login();
  };

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        {
          ...state.inputs,
          name: undefined,
        },
        state.inputs.email.isValid && state.inputs.password.isValid
      );
    } else {
      setFormData({
        ...state.inputs,
        name: {
          value: "",
          isValid: false,
        },
      });
    }
    setIsLogin(!isLogin);
  };

  return (
    <Card className="authentication" style={{ background: "white" }}>
      <h2 className="authentication-header">
        {isLogin ? "Login Required" : "Register"}
      </h2>
      <hr />
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <Input
            element="input"
            label="Your Name"
            id="name"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter valid name."
            onInput={inputHandler}
          />
        )}
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
          {isLogin ? "LOGIN" : "REGISTER"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLogin ? "LOGIN" : "REGISTER"}
      </Button>
    </Card>
  );
};

export default Auth;
