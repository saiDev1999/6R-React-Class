import { fruits } from "./fruitData";

const ListItems = () => {
  return (
    <>
      {fruits.map((eachFruit) => (
        <li key={eachFruit.id}>{eachFruit.name}</li>
      ))}
    </>
  );
};

export default ListItems;
