import React from "react";
import logo from "../images/logo.png";

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
          <a className="button1" href="/home">
            Home
          </a>
          <a className="button2" href="/about">
            About
          </a>
          <a className="button3" href="/contact">
            Connect
          </a>
          <a className="button4" href="/gallery">
            Gallery
          </a>
          <a className="button5" href="/shop">
            Shop
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderNav;
