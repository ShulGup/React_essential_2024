import React from "react";
import InputComponent from "./InputComponent";
import useInput from "./hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "./utils/validation";

const StateLogin = () => {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInvalidMessage: handleEmailBlue,
    hasError: EmailError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInvalidMessage: handlePasswordBlue,
    hasError: PasswordError,
  } = useInput("", (value) => hasMinLength(value));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (EmailError || PasswordError) {
      return;
    }

    console.log("validValue", emailValue, passwordValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputComponent
          type="email"
          id="email"
          value={emailValue}
          name="email"
          onBlur={handleEmailBlue}
          onChange={handleEmailChange}
          error={EmailError && "PLEASE add @"}
        />
        <InputComponent
          type="password"
          id="password"
          name="password"
          value={passwordValue}
          onBlur={handlePasswordBlue}
          onChange={handlePasswordChange}
          error={PasswordError && "please enter password"}
          minLength={6}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default StateLogin;
