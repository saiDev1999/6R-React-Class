import ConditionalRendering from "../conditional-rendering/condition";

const { Component } = require("react");

class SubsribeComponent extends Component {
  //state creation
  state = {
    isSubscribe: false,
    text1: "Subscribe",
    text2: "Subscribed",
  };
  handleClick = () => {
    console.log("clicked");
    // wrong way
    // this.state.isSubscribe = false;
    this.setState(
      {
        isSubscribe: !this.state.isSubscribe,
      },
      () => {}
    );
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>
        {this.state.isSubscribe ? (
          <>
            <h2>Thanks for subscribing</h2>

            <ConditionalRendering />
          </>
        ) : (
          <h2>Please subscribe to access the content</h2>
        )}
      </>
    );
  }
}

export default SubsribeComponent;
