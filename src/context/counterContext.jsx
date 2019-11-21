import React, { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = props => {
  const [counters, setState] = useState({
    counters: [
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ],
    totalCount: 4,
    incrementedCounters: 0
  });

  return (
    <CounterContext.Provider value={"hello"}>
      {props.children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
