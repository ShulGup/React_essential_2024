import React, { useContext } from "react";
import CounterContext from "../store/CounterContext";

const CounterComponent = () => {
  const { total, setTotal } = useContext(CounterContext);

  const increment = () => {
    setTotal((prevTotal) => prevTotal + 1);
  };

  const decrement = () => {
    setTotal((prevTotal) => prevTotal - 1);
  };

  return (
    <>
      <p>Current Count: {total}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default CounterComponent;
