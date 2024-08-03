import React, { useContext } from "react";
import NavBar from "../components/navbar/navbar";
import { RecipeContext } from "../navigation/navigation";

function FavouriteScreen() {
  const { favouriteDish, removFromFavorite } = useContext(RecipeContext);

  const removeHandler = (eachFood) => {
    removFromFavorite(eachFood.id);
  };
  return (
    <div>
      <NavBar />
      <h3>Wellcome to favourite recipe screen</h3>
      {favouriteDish.length > 0 ? (
        <>
          {favouriteDish.map((each) => {
            return (
              <>
                <h4>{each.name}</h4>
                <img src={each.image} width={100} height={100} />
                <button onClick={() => removeHandler(each)}>
                  Remove food{" "}
                </button>
              </>
            );
          })}
        </>
      ) : (
        <h4>No dishes found</h4>
      )}
    </div>
  );
}

export default FavouriteScreen;
