import React from "react";

export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function CounterReducerApp() {
  const [state, dispatch] = React.useReducer(counterReducer, {
    count: 0,
  });

  const Increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const Decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const Reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </p>
      <p id="counter">{state.count}</p>
    </div>
  );
}

export default CounterReducerApp;
