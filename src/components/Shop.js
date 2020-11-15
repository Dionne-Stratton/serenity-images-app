import React from "react";
import originals from "../images/originals.png";
import pod from "../images/pod.jpg";

const Shop = () => {
  return (
    <div className="shoppage">
      <h3>Shop</h3>
      <br></br>
      <div className="section1">
        <a href="/originals">
          <img src={originals} alt="art" />
        </a>
        <a href="/pod">
          <img src={pod} alt="art" />
        </a>
      </div>
    </div>
  );
};

export default Shop;
