import React from "react";
import originals from "../images/originals2.png";
import pod from "../images/pod2.jpg";

const Shop = () => {
  return (
    <div className="shoppage">
      <h3>Shop</h3>
      <br></br>
      <div className="shop">
        <a href="/originals">
          <img src={originals} alt="art" />
          <p>Originals</p>
        </a>
        <a
          href="https://society6.com/livingworddesigns/canvas?sort=new"
          target="_blank"
        >
          <img src={pod} alt="art" />
          <p>Prints</p>
        </a>
      </div>
    </div>
  );
};

export default Shop;
