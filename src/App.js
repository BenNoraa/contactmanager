import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      /*       Provider is and needs to be the outer most component
       */
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="containter">
              <AddContact />
              <Contacts />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
