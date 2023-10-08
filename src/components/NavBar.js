import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logonew.png" alt="<text to video/>" />
      </div>
      <div className="nav-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar;
