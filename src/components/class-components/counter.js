const { Component } = require("react");

class Counter extends Component {
  state = {
    count: 10,
  };

  incrementHandler = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {}
    );
  };

  resetHandler = () => {
    this.setState({
      count: 10,
    });
  };

  render() {
    return (
      <>
        <h2>My counter</h2>
        <h4>{this.state.count}</h4>
        <button onClick={this.incrementHandler}>Increament</button>
        <button>Decrement</button>
        <button onClick={this.resetHandler}>Reset</button>
      </>
    );
  }
}

export default Counter;
