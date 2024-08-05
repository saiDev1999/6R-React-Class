import React, { useState } from "react";
import ChildComponent from "./child";

function ToggleFunction() {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log("component re-render");

  const themeHandler = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div>
      <button onClick={themeHandler}>Change theme</button>
      <ChildComponent />
    </div>
  );
}

export default ToggleFunction;
