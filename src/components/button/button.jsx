const CustomButton = (prop) => {

  const {text,bgColor,width=100}=prop.properties
  return <button style={{
    backgroundColor:bgColor,
    width:width
  }} >{text}</button>;
};

export default CustomButton;
