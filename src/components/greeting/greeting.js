import React from "react";

const Greeting = (prop) => {
  return (
    <React.Fragment>
      {prop.children}

      <h3>July 17 is a holiday on account of moharram</h3>
    </React.Fragment>
  );
};
export default Greeting;
