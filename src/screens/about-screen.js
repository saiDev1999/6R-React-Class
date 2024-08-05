import CustomFormInput from "../components/formInput";
import withProfileData from "../components/hoc/withProfile";
import NavBar from "../components/navbar/navbar";

const AboutScreen = (props) => {
  // const { username } = props.data?.data || {};
  console.log(props);
  return (
    <>
      <NavBar />
      <h3>Welcome to About Screen</h3>

      {Object.keys(props.data).length > 0 ? (
        <h3> Good morning {props.data.username}</h3>
      ) : (
        <h3>Good morning user</h3>
      )}
      <CustomFormInput />
    </>
  );
};

export default withProfileData(AboutScreen);
