import { useState } from "react";

export const useCounter = (initialState = 10, scale = 1) => {
  const [value, setValue] = useState(initialState);

  const valueIncrementHandler = () => {
    setValue(value + scale);
  };

  const valueDecrementHandler = () => {
    setValue(value - scale);
  };

  const resetHandler = () => {
    setValue(0);
  };

  return [value, valueIncrementHandler, valueDecrementHandler, resetHandler];
};
