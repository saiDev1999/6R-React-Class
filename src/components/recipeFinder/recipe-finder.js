import axios from "axios";
import { useEffect, useState } from "react";

const RecipeFinder = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/recipes");

    const revampData = data.recipes.map((eachRecipe) => {
      return { id: eachRecipe.id, recipeName: eachRecipe.name };
    });
    // console.log(revampData);
    setRecipes(revampData);
    console.log(data);
  };

  const selectHandler = (event) => {
    const selectedRecipeId = event.target.value;

    fetchEachRecipe(selectedRecipeId);
  };

  const fetchEachRecipe = async (recipeId) => {
    const { data } = await axios.get(
      `https://dummyjson.com/recipes/${recipeId}`
    );

    setSelectedRecipe(data);

    console.log(data);
  };

  return (
    <>
      <h3>Select the recipes</h3>

      {recipes.length > 0 ? (
        <select onChange={selectHandler}>
          {recipes.map((each) => (
            <option value={each.id} key={each.id}>
              {each.recipeName}
            </option>
          ))}
        </select>
      ) : (
        <h5>no recipes found</h5>
      )}

      {Object.keys(selectedRecipe).length > 0 && (
        <div>
          <h4>{selectedRecipe.name}</h4>
          <h4>{selectedRecipe.rating}</h4>
        </div>
      )}
    </>
  );
};
export default RecipeFinder;
