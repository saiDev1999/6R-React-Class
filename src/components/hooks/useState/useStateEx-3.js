import { useEffect, useState } from "react";
import { greetingFn } from "../../../jsFuntions/refresh";
import axios from "axios";
// import { greetingFn } from "../../../jsFuntions/refresh";

const ShowGreeting = () => {
  const [greeting, setGreeting] = useState("");
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(30);

  useEffect(() => {
    console.log("Use effect executed...");
    document.title = "Hello user";
    greetingHandler();
    fetchRecipes();
    // window.addEventListener("mousemove", mouseTrack);
  });

  useEffect(() => {
    console.log("useEffect 2  executed..");
  });

  const countHandler = () => {
    setCount(count + 1);
  };

  const ageHandler = () => {
    setAge(age + 1);
  };
  const mouseTrack = () => {
    console.log("Mouse moving...");
  };
  const greetingHandler = () => {
    const greetString = greetingFn();
    setGreeting(greetString);
  };
  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        console.log(data);
      }
    } catch (err) {}
  };

  return (
    <>
      <h4>Hello, User {greeting}</h4>
      <button onClick={countHandler}>Count change {count}</button>
      <button onClick={ageHandler}>Count age {age}</button>
    </>
  );
};
export default ShowGreeting;
