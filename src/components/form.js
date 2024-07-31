import React, { useState } from "react";

function Forms() {
  const initial = {
    firstname: "",
    lastname: "",
    age: "",
    prority: "",
  };

  const defaultValues = [
    {
      firstname: "hello",
      lastname: "user1",
      age: "2",
    },
    {
      firstname: "hello",
      lastname: "user2",
      age: "3",
    },
  ];
  const [formData, setFormData] = useState(initial);

  const [completed, setCompleted] = useState([]);

  const [todos, setTodos] = useState(defaultValues);
  const handleChange = (event) => {
    const { name, value } = event.target;

    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstname && formData.lastname && formData.age) {
      setTodos([...todos, formData]);
    }
    setFormData(initial);
    console.log(formData);
  };

  const changeStatus = (each, index) => {
    console.log(each);

    setCompleted([...completed, each]);
    const targetIndex = index;
    const targetList = todos;

    const finalTodos = targetList.filter((_, i) => i != targetIndex);

    setTodos(finalTodos);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="firstname"
          value={formData.firstname}
        />
        <input
          type="text"
          onChange={handleChange}
          name="lastname"
          value={formData.lastname}
        />
        <input
          type="number"
          onChange={handleChange}
          name="age"
          value={formData.age}
        />
        <select onChange={handleChange} name="prority">
          {/* <option>Please choose one option</option> */}
          <option value="Low">low </option>
          <option value="High">High </option>

          <option value="medium">medium </option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {todos.map((each, index) => {
        return (
          <>
            <h3>Todos listing</h3>
            <h4>{each.firstname + each.lastname}</h4>
            <h6>{each.age}</h6>
            <h4>{each.prority}</h4>
            <button onClick={() => changeStatus(each, index)}>Complete</button>
          </>
        );
      })}
      -------------------
      <h3>completed listing</h3>
      {completed.map((each, index) => {
        return (
          <>
            <h4>{each.firstname + each.lastname}</h4>
            <h6>{each.age}</h6>
          </>
        );
      })}
    </div>
  );
}

export default Forms;
