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
import CustomList from "./components/customList/custom-list";

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
const App = () => (
  <div>
    <Heading1 title={"Fruites"} />
    <CustomList list={["apple", "watermelon"]} />
    <Heading1 title={"Students"} />
    <CustomList list={students} />
    <Heading1 title={"Vegetables"} />
    <CustomList list={vegetable} />
    <Heading1 title={"Sceientist"} />
    <CustomList list={scientist} />
    <Heading1 title={"Iplteams"} />
    <CustomList list={iplTeams} />

    <Heading1 title={Item} />
    <Heading1 title={"Ingredeients required to cook" + Item} />
    <CustomList list={ingredients} />
    <Heading1 title={"Instructions required to cook" + Item} />
    <CustomList list={instructions} />
  </div>
);

export default App;
