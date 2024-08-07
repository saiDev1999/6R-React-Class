import CustomFormInput from "../components/formInput";
import withProfileData from "../components/hoc/withProfile";
import NavBar from "../components/navbar/navbar";
import CustomSpinner from "../components/spinner/custom-spinner";
import { useAxios } from "../customHooks/useAxios";

const AboutScreen = (props) => {
  // const { username } = props.data?.data || {};
  console.log(props);

  const [data, error, loading] = useAxios();

  console.log(data);

  if (error) {
    return (
      <>
        <NavBar />
        <h3>Something went wrong</h3>;
      </>
    );
  }
  return (
    <>
      <NavBar />
      <h3>Welcome to About Screen</h3>
      {loading ? <CustomSpinner /> : <h3>Data retrieve success</h3>}
    </>
  );
};

export default withProfileData(AboutScreen);
