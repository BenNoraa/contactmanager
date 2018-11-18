import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  // usually where you make calls to an API and AJAX calls
  // also do not need to use an arrow function below (i.e., compDidMount () => {}) b/c
  // compDidMount is a lifecycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   // this runs before DidMount
  //   componentWillMount() {
  //     console.log("componentWillMount...");
  //   }

  // only runs when component updates, i.e., state changes
  // if you add this method to context.js you will see this message in the console since that's a state change.
  //   componentDidUpdate() {
  //     console.log("componentDidUpdate...");
  //   }

  //   componentWillUpdate() {}

  //   // when your compoonent receives new properits, then this will run
  //   // this is usually used with Redux
  //   componentWillReceiveProps(nextProps, nextState) {}

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
