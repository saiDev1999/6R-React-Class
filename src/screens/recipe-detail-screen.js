import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CustomSpinner from "../components/spinner/custom-spinner";
import CustomList from "../components/customList/custom-list";
import "./recipe.css";
import withProfileData from "../components/hoc/withProfile";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipeDetail, setRecipeDetail] = useState({});

  useEffect(() => {
    fetchEachProduct();
  }, [recipeId]);

  const fetchEachProduct = async () => {
    const { data } = await axios.get(
      `https://dummyjson.com/recipes/${recipeId}`
    );
    setRecipeDetail(data);
  };

  return (
    <div className="recipe-detail-container">
      {Object.keys(recipeDetail).length > 0 ? (
        <>
          <h5 className="recipe-title">{recipeDetail.name}</h5>
          <h5 className="recipe-rating">Rating: {recipeDetail.rating}</h5>
          <img
            src={recipeDetail.image}
            alt={recipeDetail.name}
            className="recipe-image"
            width={100}
            height={100}
          />
          <CustomList list={recipeDetail.ingredients} className="custom-list" />
          <CustomList
            list={recipeDetail.instructions}
            className="custom-list"
          />
          <p>Prep Time: {recipeDetail.prepTimeMinutes} minutes</p>
          <p>Cook Time: {recipeDetail.cookTimeMinutes} minutes</p>
          <p>Servings: {recipeDetail.servings}</p>
          <p>Difficulty: {recipeDetail.difficulty}</p>
          <p>Cuisine: {recipeDetail.cuisine}</p>
          <p>Calories per Serving: {recipeDetail.caloriesPerServing}</p>
          <p>Tags: {recipeDetail.tags.join(", ")}</p>
          <p>Meal Types: {recipeDetail.mealType.join(", ")}</p>
          <p>Reviews: {recipeDetail.reviewCount}</p>
        </>
      ) : (
        <div className="spinner-container">
          <CustomSpinner />
          <h3 className="spinner-message">Please wait, data is loading....</h3>
        </div>
      )}
    </div>
  );
};

export default withProfileData(RecipeDetail);
