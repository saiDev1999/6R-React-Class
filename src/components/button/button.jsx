import "./button.css"
import style from "../../App.module.css"

const CustomButton = (prop) => {

  const {text,}=prop

 
  return <button className={style.button} >{text}</button>;
};

export default CustomButton;
