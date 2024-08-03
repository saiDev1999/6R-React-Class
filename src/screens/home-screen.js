import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import NavBar from "../components/navbar/navbar";
import { RecipeContext } from "../navigation/navigation";

const HomeScreen = () => {
  const { username, counter } = useContext(DataContext);
  const { recipeList, addFavouriteDishHandler } = useContext(RecipeContext);
  const navigate = useNavigate();
  console.log(recipeList, "recipeLits");
  const changeHandler = (event) => {
    console.log(event.target.value);
  };

  const addFoodHandler = (eachFood) => {
    addFavouriteDishHandler(eachFood);
  };

  const goToFavoriteHandler = () => {
    navigate("favouriteRecipe");
  };
  return (
    <>
      <NavBar />
      <h3>
        Welcome {username} {counter}
      </h3>
      {recipeList &&
        recipeList.length > 0 &&
        recipeList.map((each) => {
          return (
            <>
              <h4>{each.name}</h4>
              <img src={each.image} width={100} height={100} />
              <button>View recipe</button>

              {each.existsInFavorite ? (
                <button onClick={goToFavoriteHandler}>go to favourite</button>
              ) : (
                <button onClick={() => addFoodHandler(each)}>
                  Add to favourite{" "}
                </button>
              )}
            </>
          );
        })}
    </>
  );
};

export default HomeScreen;
