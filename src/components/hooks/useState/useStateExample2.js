import React, { useState } from "react";

const UsetStateExample2 = () => {
  const [todos, setTodos] = useState([
    {
      period: "Morning",
      todo: "Woke up at 8am",
    },
    {
      period: "AfterNoon",
      todo: "Lunch  at 1pm",
    },
  ]);
  const todoHandler = () => {
    const newTodo = {
      period: "Evening",
      todo: "Break  at 4pm",
    };
    const newTodoState = [...todos, newTodo];
    setTodos(newTodoState);
  };

  const deleteHandler = (index) => {
    console.log(index, todos);
    const finalState = todos.filter((_, ind) => ind !== index);
    setTodos(finalState);
  };
  return (
    <>
      <h4>Use state example 2</h4>
      <button onClick={todoHandler}>Add Todo</button>
      {todos.map((eachTodo, index) => {
        return (
          <React.Fragment key={index}>
            <h4>Current period {eachTodo.period}</h4>
            <h6>Current period {eachTodo.todo}</h6>
            <button onClick={() => deleteHandler(index)}>Delete todo</button>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default UsetStateExample2;
