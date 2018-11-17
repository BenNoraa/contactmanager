import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      {/* below this line shows style done inline  */}
      {/* <h1 style={{ color: "red", fontSize: "50px" }}>{branding}</h1> */}

      {/* below this line shows how to style using a variable that is declared below outside the return */}
      <h1 style={headingStyle}>{branding}</h1>
    </div>
  );
};

// set default prop values which will be what is seen if nothing is set in App.js, i.e., Contact Manager
Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// styles put within a var
const headingStyle = {
  color: "green",
  fontSize: "50px"
};

// you can also create a specific stylesheet for each Component as well, i.e., Header.css
// see Contact.css for real file example

export default Header;
