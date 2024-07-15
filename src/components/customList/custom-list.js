const CustomList = ({ list }) => {
  return (
    <ul>
      {list.map((eachItem) => (
        <li>{eachItem}</li>
      ))}
    </ul>
  );
};

export default CustomList;
