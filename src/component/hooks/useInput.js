import React from "react";

const useInput = (defaultValue, InputIsValid) => {
  const [stateChange, setStateChange] = React.useState(defaultValue);
  const [didBlurInput, setDidBlurInput] = React.useState(false);
  const invalidEmailMessage = !didBlurInput && InputIsValid(stateChange);

  const handleInputChange = (event) => {
    setStateChange(event.target.value);
    setDidBlurInput(true);
  };

  const handleInvalidMessage = () => {
    setDidBlurInput(true);
  };
  return {
    value: stateChange,
    handleInputChange,
    handleInvalidMessage,
    hasError: invalidEmailMessage,
  };
};

export default useInput;
