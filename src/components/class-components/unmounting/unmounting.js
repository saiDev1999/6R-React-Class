import React, { Component } from "react";

export default class UnMounting extends Component {
  constructor() {
    super();
    this.state = {
      isChildVisible: true,
    };
  }
  childHandler = () => {
    this.setState({
      isChildVisible: !this.state.isChildVisible,
    });
  };
  render() {
    return (
      <div>
        {this.state.isChildVisible ? <Child /> : <h3>No child found</h3>}
        <button onClick={this.childHandler}>Click me </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    //This method is used to clean up the memory leaks of component while removing
    alert("i am removed");
  }
  render() {
    return <div>unmounting</div>;
  }
}
