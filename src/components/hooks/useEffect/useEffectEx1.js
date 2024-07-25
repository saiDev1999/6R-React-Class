import { useEffect, useState } from "react";

const UseEffectEx1 = () => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", mouseTrack);
    return () => {
      window.removeEventListener("mousemove", mouseTrack);
    };
  }, []);
  const mouseTrack = (event) => {
    setXPosition(event.clientX);
    setYPosition(event.clientY);
  };
  return (
    <>
      <h3>Use effect example</h3>
      <h4>Current mouse position in x-axis {xPosition}</h4>
      <h4>Current mouse position in y-axis {yPosition}</h4>
    </>
  );
};

export default UseEffectEx1;

// screen 1, 2,3
