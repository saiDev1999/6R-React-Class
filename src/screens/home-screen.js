import NavBar from "../components/navbar/navbar";
import WeatherComponent from "../components/weather/weather";

const HomeScreen = () => {
  const changeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <NavBar />
      <h3>Welcome to home screen</h3>

      <select onChange={changeHandler}>
        <option value={"Dish 1"}>Dish 1</option>
        <option value={"Dish 2"}>Dish 2</option>
      </select>
      <WeatherComponent />
    </>
  );
};

export default HomeScreen;
