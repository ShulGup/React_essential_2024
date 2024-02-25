import React from "react";

const InputComponent = ({ id, error, label, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <p>{error}</p>
    </>
  );
};

export default InputComponent;
