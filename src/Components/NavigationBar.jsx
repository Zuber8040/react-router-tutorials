import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" width="100px" />
      <ul>
        <Link to="/">
          {" "}
          <li>Home</li>{" "}
        </Link>
        <Link to="/about">
          {" "}
          <li>About</li>
        </Link>
        <Link to="/product">
          <li>Products</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default NavBar;
