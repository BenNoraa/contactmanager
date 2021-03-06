import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  // propTypes can be placed here within the Class or down below outside
  // of the Class where they are currently commented out
  // static propTypes = {
  //   contact: PropTypes.object.isRequired
  // };
  state = {};

  // how to make a dynamic onclick custom method
  onShowClick = (contact, e) => {
    console.log(contact.name);
  };

  render() {
    // Destructuring example b/c of redundant props.name, props.email, props.phone that existed in each Contact
    // they are not commented out due to the destructuring seen right below this line.
    const { contact } = this.props;
    // above could also be this as seen on the line below where we are pulling attributes from contact like getting contact from props above.
    // const { name, email, phone } = this.props.contact;
    return (
      // Since this is a Class component, we access props by using the 'this' keyword
      // this is different vs how we access props in the Header component b/c it's not a Class component
      // Before destructuring
      //   <div>
      //     <h4>{this.props.name}</h4>
      //     <ul>
      //       <li>Email: {this.props.email}</li>
      //       <li>Phone: {this.props.phone}</li>
      //     </ul>
      //   </div>

      // After destructuring and removing redundant this.props and putting it into a const
      <div className="card card-body mb-3">
        <h4>
          {contact.name}{" "}
          {/* 'this' keyword is used b/c it is referrring to a method that's in this Class */}
          <i
            onClick={this.onShowClick.bind(this, contact)}
            className="fas fa-sort-down"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            Email:
            {contact.email}
          </li>
          <li className="list-group-item">
            Phone:
            {contact.phone}
          </li>
        </ul>
      </div>
    );
  }
}

// propTypes defined OUTSIDE of the Class shown here

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
