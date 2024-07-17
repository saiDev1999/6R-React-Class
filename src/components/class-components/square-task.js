import { Component } from "react";
import "./sqaure.css";

class SquareComponent extends Component {
  state = {
    sqaureArray: [],
  };
  addSquareHandler = () => {
    const newState = [...this.state.sqaureArray, 1];
    this.setState({
      sqaureArray: newState,
    });
  };
  render() {
    return (
      <>
        <h1>Sqaure component</h1>
        <button onClick={this.addSquareHandler}>Add Sqaures</button>

        {this.state.sqaureArray.map((each, index) => {
          return (
            <div
              className="sqaure-card-highlight"
              //   className={
              //     (index + 1) % 2 === 0
              //       ? "sqaure-card-highlight"
              //       : "sqaure-card-not-highlight"
              //   }
            >
              {index + 1}
            </div>
          );
        })}
      </>
    );
  }
}

export default SquareComponent;
