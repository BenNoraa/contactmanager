import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Contact.css";

class Contact extends Component {
  // propTypes can be placed here within the Class or down below outside
  // of the Class where they are currently commented out
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    // Destructuring example b/c of redundant props.name, props.email, props.phone that existed in each Contact
    // they are not commented out due to the destructuring seen right below this line.
    const { name, email, phone } = this.props;
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
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
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

export default Contact;
