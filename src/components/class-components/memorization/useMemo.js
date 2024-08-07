// Number 1 -> even or odd  -> change

import { useCallback, useMemo, useState } from "react";
import CustomButton from "../../button/button";
import { useCounter } from "../../../customHooks/useCounter";
import { isEven } from "../../../jsFuntions/refresh";

const UseMemo = () => {
  const [age, incrementAge] = useCounter(10);
  const [weight, incrementWeight] = useCounter(60, 2);

  return (
    <>
      <h3>
        current age {age} {isEven(age) ? "even" : "odd"}{" "}
      </h3>
      <h3>current weight {weight}</h3>
      <CustomButton text="Increase age" onPress={incrementAge} />
      <CustomButton text="Increase weight" onPress={incrementWeight} />
    </>
  );
};
export default UseMemo;
