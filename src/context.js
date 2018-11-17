import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        // contacts is the array of objects of contacts
        // take payload which is the entire contact info, i.e., name, email
        // add onto our current contacts in our state with the SPREAD operator ...state.contacts
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@contacts.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@contacts.com",
        phone: "333-555-5555"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@contacts.com",
        phone: "222-222-2222"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
