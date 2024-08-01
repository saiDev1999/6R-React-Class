// function App() {
//   return <h1>Hello world</h1>;
// }
import CustomButton from "./components/button/button";
import MainHeading, {
  Heading2 as SecondaryHeading,
} from "./components/headings/heading";
import UnorderedList from "./components/lists/unorderedList";
import ListParent from "./components/lists/listParent";
import ProfileComponent from "./components/profile/profileComponent";
import CustomImage from "./components/image/customImage";
import Heading1 from "./components/headings/heading";
import { bagData } from "./components/lists/fruitData";
import Greeting from "./components/greeting/greeting";
import React, { createContext, useState } from "react";
import Card from "./components/card/card";
import style from "./App.module.css";
import CustomAccordion from "./components/boostrap/accordion";
import MyComponent from "./components/boostrap/my-component";
import CustomSpinner from "./components/spinner/custom-spinner";
import CustomList from "./components/customList/custom-list";
import ConditionalRendering from "./components/conditional-rendering/condition";
import CustomClassButton from "./components/class-components/button";
import SubsribeComponent from "./components/class-components/subscribe-button";
import TodoComponent from "./components/class-components/todo";
import Counter from "./components/class-components/counter";
import SquareComponent from "./components/class-components/square-task";
import IplTeams from "./components/class-components/iplTeams";
import FetchExample from "./components/class-components/fetchExample";
import RepiceList from "./components/class-components/recipes-list";
import MountingComponent from "./components/class-components/mounting/mounting";
import UpdatingComponent from "./components/class-components/updating/updating";
import UnMounting from "./components/class-components/unmounting/unmounting";
import Parent from "./components/class-components/purecomponent/parent";
import UseStateExample1 from "./components/hooks/useState/useStateEx1";
import UsetStateExample2 from "./components/hooks/useState/useStateExample2";
import ShowGreeting from "./components/hooks/useState/useStateEx-3";
import UseEffectEx1 from "./components/hooks/useEffect/useEffectEx1";
import UncontrolledForm from "./components/forms/uncontrolled/uncontrolled-form";
import ControlledForm from "./components/forms/controlled/controlled-form";
import WeatherComponent from "./components/weather/weather";
import NavigationStack from "./navigation/navigation";

const students = ["Shiva", "Bhanu", "Priyatham"];
const vegetable = ["tomato", "potato"];
const scientist = ["lin", "einstein"];
const iplTeams = ["mumbai", "chennai"];

const Item = "Biryani";
const ingredients = ["Rice", "Masalas", "Spices", "Onions", "Oil"];
const instructions = [
  "Switch on the stove",
  "Take a cooker",
  "Add Oil",
  "Fry onions",
  "Add spices",
  "Cook for 2 mins",
  "Add Rice",
  "Add water and cook for 20 mins",
  "Eat the biryani",
];

export const DataContext = createContext();

const App = () => {
  const [username, setUserName] = useState("sumanth");
  const [darkMode, setDarkMode] = useState(true);
  const [counter, setCounter] = useState(100);

  const changeUsername = (newName) => {
    setUserName(newName);
  };

  const changeCount = (value) => {
    setCounter(counter + value);
  };

  return (
    <DataContext.Provider
      value={{
        username,
        darkMode,
        changeUsername,
        counter,
        changeCount,
      }}
    >
      <NavigationStack />;
    </DataContext.Provider>
  );
};

export default App;
