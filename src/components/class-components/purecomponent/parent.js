import React, { Component } from "react";
import Child from "./child";

export default class Parent extends Component {
  state = {
    toggleComponent: false,
  };
  toggleHandler = () => {
    this.setState({
      toggleComponent: !this.state.toggleComponent,
    });
  };
  componentDidMount() {
    console.log("componentDidMount parent");
  }
  render() {
    console.log("Parent rendering..");
    return (
      <div>
        <Child />
        <button onClick={this.toggleHandler}>Toggle the component</button>
      </div>
    );
  }
}
