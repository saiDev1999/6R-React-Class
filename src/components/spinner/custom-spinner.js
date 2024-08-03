import { Audio } from "react-loader-spinner";

const CustomSpinner = (prop) => {
  const { color = "green" } = prop;
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
    // <DNA
    //   visible={true}
    //   height="80"
    //   width="80"
    //   ariaLabel="dna-loading"
    //   wrapperStyle={{}}
    //   wrapperClass="dna-wrapper"
    // />
  );
};

export default CustomSpinner;
