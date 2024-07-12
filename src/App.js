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
import React from "react";
import Card from "./components/card/card";
import style from "./App.module.css";
import CustomAccordion from "./components/boostrap/accordion";
import MyComponent from "./components/boostrap/my-component";
import CustomSpinner from "./components/spinner/custom-spinner";

const students = ["Shiva", "Bhanu", "Priyatham"];
const App = () => (
  <div>
    <CustomSpinner color={"red"} />
    <MyComponent />
    {/* <CustomAccordion  /> */}
    {/* <Card /> */}
  </div>
);

export default App;
