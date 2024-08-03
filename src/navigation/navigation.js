import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import SettingScreen from "../screens/setting-screen";
import BlogScreen from "../screens/blog-screen";
import InvalidScreen from "../screens/invalid-screen";
import UserScreen from "../screens/user-screen";
import AdminScreen from "../screens/admin-screen";
import RecipeDetail from "../screens/recipe-detail-screen";
import DoctorsScreen, {
  NewDoctors,
  OldDoctors,
} from "../screens/doctor-screen";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import FavouriteScreen from "../screens/favourite-recipe-screen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RecipeContext = createContext();

const NavigationStack = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [favouriteDish, setFavouriteDish] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");

      const newData = data.recipes.map((EachData) => {
        return { ...EachData, existsInFavorite: false };
      });

      console.log(newData, "newData");

      if (status === 200) {
        console.log(data);
        setRecipeList(newData);
      }
    } catch (err) {}
  };

  const addFavouriteDishHandler = (newDish) => {
    const recipeExists = favouriteDish.find(
      (eachFood) => eachFood.id == newDish.id
    );

    const newRecipesList = recipeList.map((eachRecipe) => {
      if (eachRecipe.id == newDish.id) {
        return { ...eachRecipe, existsInFavorite: true };
      } else {
        return eachRecipe;
      }
    });

    setRecipeList(newRecipesList);

    if (recipeExists) {
      toast.error("already exists in favourite foods! !", {
        position: "top-right",
      });
      // alert("already exists in favourite foods");
    } else {
      setFavouriteDish([...favouriteDish, newDish]);
      toast.success("Added to favourites !", {
        position: "top-right",
      });
    }
  };

  const removFromFavorite = (id) => {
    const newRecipesList = recipeList.map((eachRecipe) => {
      if (eachRecipe.id == id) {
        return { ...eachRecipe, existsInFavorite: false };
      } else {
        return eachRecipe;
      }
    });

    setRecipeList(newRecipesList);
    const newFavouriteList = favouriteDish.filter(
      (eachDish) => eachDish.id != id
    );
    setFavouriteDish(newFavouriteList);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeList: recipeList,
        favouriteDish: favouriteDish,
        addFavouriteDishHandler: addFavouriteDishHandler,
        removFromFavorite: removFromFavorite,
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* Static routes */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="settings" element={<SettingScreen />} />
          <Route path="blog" element={<BlogScreen />} />
          <Route path="*" element={<InvalidScreen />} />
          <Route path="recipes" element={<UserScreen />} />
          <Route path="favouriteRecipe" element={<FavouriteScreen />} />

          <Route path="doctors" element={<DoctorsScreen />}>
            <Route path="new" element={<NewDoctors />} />
            <Route path="old" element={<OldDoctors />} />
          </Route>

          <Route path="users/admin" element={<AdminScreen />} />

          {/* dynamic routes */}
          <Route path="recipes/:cuisine/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </RecipeContext.Provider>
  );
};

export default NavigationStack;
