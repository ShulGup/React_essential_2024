import React from "react";

class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      Counter: 0,
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.Counter}</h1>
        <button
          onClick={() => this.setState({ Counter: this.state.Counter + 1 })}
        >
          Increment
        </button>
      </>
    );
  }
}

export default CounterClass;
