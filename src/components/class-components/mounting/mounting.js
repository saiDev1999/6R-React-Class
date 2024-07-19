import axios from "axios";
import { Component } from "react";

class MountingComponent extends Component {
  constructor() {
    console.log("constructor executing...");
    super();
    this.state = {
      color: "red",
      recipesList: [],
      loader: true,
      error: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps executing...", props, state);
    return { color: props.myColor };
  }

  componentDidMount() {
    console.log("componentDidMount executing...");
    this.fetchRecipes();
  }

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

  render() {
    console.log("render executing.....");
    return (
      <>
        <h1>Mounting example</h1>
        <h4 style={{ color: this.state.color }}>
          Favourite color {this.state.color}
        </h4>
      </>
    );
  }
}

export default MountingComponent;
