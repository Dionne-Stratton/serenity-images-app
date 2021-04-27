import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="headernav">
      <header>
        <div className="container">
          <img src={logo} className="logo" alt="Turquoise butterfly." />
          <div className="text-box">
            <h1>Serenity Images</h1>
            <h2>Art that Inspires</h2>
          </div>
        </div>

        <nav id="hnavbuttons">
          <NavLink className="main-nav" activeClassName="active" to="/home">
            Home
          </NavLink>
          <NavLink className="main-nav" activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink className="main-nav" activeClassName="active" to="/gallery">
            Prints
          </NavLink>
          <NavLink
            className="main-nav"
            activeClassName="active"
            to="/originals"
          >
            Originals
          </NavLink>
          {/* <NavLink className="main-nav" activeClassName="active" to="/pod">
            POD
          </NavLink> */}
          <NavLink className="main-nav" activeClassName="active" to="/watch">
            Watch
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default HeaderNav;
