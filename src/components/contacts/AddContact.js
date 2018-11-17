import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// allows us to auto create unique user id for things like adding users
import uuid from "uuid";

class AddContact extends Component {
  // when you create a form usually each field or input is a piece of the state
  state = {
    name: "",
    email: "",
    phone: ""
  };

  // submitting a new contact method
  // e is last here
  onSubmit = (dispatch, e) => {
    // prevents any default submitting of a form
    e.preventDefault();

    // get values from the state so use destructuring
    const { name, email, phone } = this.state;

    // construct a new Contact object
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    // call dispatch by type ADD_CONTACT to perform action
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // clear input fields
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  // whenever you have an event you can pass an e
  // e.target.value is how you get the value in the form fields
  // name will access whatever is listed in the name input for each input, i.e., name = email.
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // want value of form to be whatever is in the state for that particular field
    // destructuring done here to pull out name, email, and phone from state
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          // get access to dispatch that allows us to call ADD_CONTACT
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                {/* pass in dispatch to the onSubmit call with bind so we can use it inside of onSubmit */}
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name} // name comes from the state which we defined in the const = { name, .. } above the return
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email} // email comes from the state which we defined in the const = { name, .. } above the return
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone} // phone comes from the state which we defined in the const = { name, .. } above the return
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
