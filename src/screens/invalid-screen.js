import { Link, useNavigate } from "react-router-dom";

const InvalidScreen = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <>
      <h4>Invalid screen 404 error</h4>
      <button onClick={navigateToHome}>Go to home</button>
    </>
  );
};

export default InvalidScreen;
