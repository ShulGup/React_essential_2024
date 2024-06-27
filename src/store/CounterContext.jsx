import { createContext } from "react";

const CounterContext = createContext({
  total: 10,
});

export default CounterContext;
