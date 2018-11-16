import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // if you're only using a constructor to create your state you don't need to use a constructor
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
    ]
  };

  render() {
    // Destructuring by pulling the contacts out of the state
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
