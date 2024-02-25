import React from "react";

const CounterApp = () => {
  const [Counter, SetCounter] = React.useState(0);
  const IncreaseTheCounter = () => {
    SetCounter(Counter + 1);
  };
  const DecreaseTheCounter = () => {
    if (Counter > 0) {
      SetCounter(Counter - 1);
    }
  };
  return (
    <>
      <h1>{Counter}</h1>
      <button onClick={IncreaseTheCounter}>Increment</button>
      <button onClick={DecreaseTheCounter}>Decrement</button>
    </>
  );
};

export default CounterApp;
