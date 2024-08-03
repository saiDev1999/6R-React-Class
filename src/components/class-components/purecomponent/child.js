import React, { PureComponent } from "react";

export default class Child extends PureComponent {
  componentDidMount() {
    console.log("componentDidMount child");
  }
  render() {
    console.log("Child rendering..");
    return (
      <div>
        <h2>Hai hello</h2>
      </div>
    );
  }
}
