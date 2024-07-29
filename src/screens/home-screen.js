import NavBar from "../components/navbar/navbar";
import WeatherComponent from "../components/weather/weather";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <h3>Welcome to home screen</h3>
      <WeatherComponent />
    </>
  );
};

export default HomeScreen;
