import { createContext } from "react";

const CounterContext = createContext({
  total: 20,
});

export default CounterContext;
