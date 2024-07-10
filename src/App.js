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
const App = () => (
  <div>
    {bagData.map((eachBag) => {
      return (
        <div>
          <CustomImage
            source={eachBag.source}
            altText="bag"
            width={100}
            height={100}
          />
          <Heading1 title={eachBag.name} />
        </div>
      );
    })}
  </div>
);

export default App;
