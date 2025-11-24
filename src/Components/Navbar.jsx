import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="navbar_wrapper">
          <nav className="nav">
            <div className="logo"><img src={logo} alt=""height="55px" width="230px"/></div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
