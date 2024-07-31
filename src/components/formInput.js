import React, { useState } from "react";

function CustomFormInput() {
  const [selected, setSelected] = useState("");
  const recipes = [
    {
      name: "Fried rice",
      id: 1,
    },
    {
      name: "Pizza",
      id: 2,
    },
  ];

  const changeHandler = (event) => {
    setSelected(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(selected, "dish");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <select onChange={changeHandler}>
          {recipes.map((eachRecipe) => {
            return (
              <option key={eachRecipe.id} value={eachRecipe.name}>
                {eachRecipe.name}
              </option>
            );
          })}
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default CustomFormInput;
