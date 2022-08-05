import React from "react";
const logo = require("./aliste.jpeg");
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="aliste-logo" />
    </div>
  );
};

export default Navbar;
