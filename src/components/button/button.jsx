import "./button.css"

const CustomButton = (prop) => {

  const {text,bgColor,width=100}=prop

 
  return <button className="button" >{text}</button>;
};

export default CustomButton;
