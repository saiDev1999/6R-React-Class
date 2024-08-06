import "./button.css"
import style from "../../App.module.css"
import React from "react";

const CustomButton = (prop) => {
  console.log("button re-renderToString...",prop.text)

  const {text,onPress}=prop

 
  return <button  style={{backgroundColor:"greenyellow"}} onClick={onPress}  >{text}</button>;
};

export default React.memo(CustomButton);
