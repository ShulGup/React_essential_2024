import React from "react";

export const ErrorComponent = ({ title, message, onConfirm }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h2>{message}</h2>
        {title && message && <button onClick={onConfirm}>Confirm</button>}
      </div>
    </>
  );
};
