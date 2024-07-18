import axios from "axios";
import React, { Component } from "react";
import CustomImage from "../image/customImage";
import CustomList from "../customList/custom-list";
import Heading1 from "../headings/heading";

class RepiceList extends Component {
  state = {
    recipesList: [],
    loader: true,
    error: false,
  };
  fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        this.setState({
          recipesList: data.recipes,
          loader: false,
        });
      }
    } catch (err) {
      this.setState({
        error: true,
        loader: false,
      });
    }
  };

  componentDidMount() {
    this.fetchRecipes();
  }

  render() {
    return (
      <React.Fragment>
        <h4>hello</h4>
        {this.state.loader ? (
          <h4>Please wait....</h4>
        ) : (
          <>
            {this.state.recipesList.map((eachRecipe) => {
              const { name, image, id, ingredients, instructions } = eachRecipe;
              return (
                <React.Fragment key={id}>
                  <h4>{name}</h4>
                  <CustomImage source={image} width={100} height={100} />
                  <Heading1 title={`Ingredients required for dish ${name}`} />
                  <CustomList list={ingredients} />
                  {/* <ol>
                    {ingredients.map((eachIngredient, index) => (
                      <li key={index}>{eachIngredient}</li>
                    ))}
                  </ol> */}
                  <Heading1 title={`Instructions required for dish ${name}`} />
                  <CustomList list={instructions} />
                </React.Fragment>
              );
            })}
          </>
        )}
      </React.Fragment>
    );
  }
}

export default RepiceList;
