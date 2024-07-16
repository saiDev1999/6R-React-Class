import { Component } from "react";
import CustomList from "../customList/custom-list";

class TodoComponent extends Component {
  state = {
    todos: ["watch kalki movie on 17 July", "watch indian -2 movie on 18-july"],
  };

  addTodoHandler = () => {
    const newState = [...this.state.todos, "Watch kalki-2 on july 2025"];
    this.setState({
      todos: newState,
    });
  };
  render() {
    return (
      <>
        <h3>I am todo component</h3>
        <CustomList list={this.state.todos} />
        <button onClick={this.addTodoHandler}>Click to add todo</button>
      </>
    );
  }
}

export default TodoComponent;
