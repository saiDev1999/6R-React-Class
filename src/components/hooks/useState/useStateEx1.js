import { useState } from "react";

const UseStateExample1 = () => {
  const [login, setLogin] = useState(false);
  const [count, setCount] = useState(10);

  const loginHandler = () => {
    // setLogin((login) => !login);
    setLogin(!login); //true
  };

  const incrementHandler = () => {
    // setInterval(() => {
    //   setCount((count) => count + 1);
    // }, 1000);
  };

  return (
    <>
      <h4>Use State example</h4>

      {login ? <h4>Wellcome user</h4> : <h4>Please login</h4>}
      <button onClick={loginHandler}>Click me</button>
      <button onClick={incrementHandler}>{count}</button>
    </>
  );
};

export default UseStateExample1;
