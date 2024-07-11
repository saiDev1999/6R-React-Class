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

const students = ["Shiva", "Bhanu", "Priyatham"];
const App = () => (
  <div>
    {/* {students.map((eachStudent, index) => (
      <React.Fragment key={index}>
        <Greeting>
          <Card>{eachStudent}</Card>
        </Greeting>
      </React.Fragment>
    ))} */}
    <CustomButton text="hello world" bgColor={"green"} width={100} />
  </div>
);

export default App;

const Card = (prop) => {
  return (
    <>
      <h4>Good morning {prop.children}</h4>
      <h4>How was the weather today ?</h4>
    </>
  );
};
