import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "Larry";
    const showHello = false;
    const showMath = true;
    const num1 = 40;
    const num2 = 23;

    let math;
    if (showMath) {
      math = (
        <h4>
          {num1} + {num2} = {num1 + num2}
        </h4>
      );
    } else {
      math = null;
    }
    // long way of doing it but also helps teach how return and jsx works from a js POV.

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The App Component")
    // );

    // do not create vars in the return you're just returning jsx so do it above return
    return (
      <div className="App">
        <h1>The App Component</h1>
        {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
        {math}
      </div>
    );
  }
}

export default App;
