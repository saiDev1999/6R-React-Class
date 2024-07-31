import { useContext } from "react";
import NavBar from "../components/navbar/navbar";
import { DataContext } from "../App";

const SettingScreen = () => {
  const { username, darkMode, changeUsername } = useContext(DataContext);
  const nameChanger = () => {
    changeUsername("srinivas");
  };
  return (
    <>
      <NavBar />
      <h3>Welcome {username}</h3>
      <button onClick={nameChanger}>Change username</button>
    </>
  );
};

export default SettingScreen;
