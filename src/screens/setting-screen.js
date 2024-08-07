import { useContext } from "react";
import NavBar from "../components/navbar/navbar";
import { DataContext } from "../App";
import ToggleFunction from "../components/reactmemo/parent";
import DishListing from "../components/class-components/memorization/dishListing";
import UseMemo from "../components/class-components/memorization/useMemo";

const SettingScreen = () => {
  const { username, darkMode, changeUsername, changeCount, counter } =
    useContext(DataContext);
  const nameChanger = () => {
    changeUsername("srinivas");
  };
  const changeCountHandler = () => {
    changeCount(1);
  };
  return (
    <>
      <NavBar />
      <UseMemo />
      {/* <DishListing /> */}
      {/* <ToggleFunction /> */}
      {/* <h3>
        Welcome {username} {counter}
      </h3>
      <button onClick={nameChanger}>Change username</button>
      <button onClick={changeCountHandler}>Change count</button> */}
    </>
  );
};

export default SettingScreen;
