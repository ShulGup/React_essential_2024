import { createContext } from "react";

const CounterContext = createContext({
  total: 0,
});

export default CounterContext;
