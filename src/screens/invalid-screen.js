import { Link } from "react-router-dom";

const InvalidScreen = () => {
  return (
    <>
      <h4>Invalid screen 404 error</h4>
      <button>
        <Link to={"/"}>Go to Home</Link>
      </button>
    </>
  );
};

export default InvalidScreen;
