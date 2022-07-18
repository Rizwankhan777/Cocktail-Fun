import React from "react";
import logo from "../logo.svg"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-md-2">
              <img src={logo} alt="" className="logo"/>
          </div>
        <div className="col-md-10">
          <ul className="desktopHeader">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
