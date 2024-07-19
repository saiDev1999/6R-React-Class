import React, { Component } from "react";

export default class UpdatingComponent extends Component {
  constructor() {
    super();
    this.state = {
      cakeCount: 100,
    };
  }

  buyCakeHandler = () => {
    this.setState({
      cakeCount: this.state.cakeCount - 1,
    });
  };
  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState);
    return null;
  }

  componentDidMount() {
    document.title = `Cake Count ${this.state.cakeCount}`;
  }

  componentDidUpdate() {
    document.title = `Cake Count ${this.state.cakeCount}`;
  }
  render() {
    console.log("render executing...");
    return (
      <div>
        <h3>Non of cakes in the shop {this.state.cakeCount}</h3>
        <button onClick={this.buyCakeHandler}>Buy Cake</button>
      </div>
    );
  }
}
