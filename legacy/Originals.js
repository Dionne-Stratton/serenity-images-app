import React, { useState } from "react";
import OriginalsArray from "../components/OriginalsArray";

const Shop = () => {
  const [search, setSearch] = useState("");

  let filteredArray = OriginalsArray.filter((art) =>
    art.keyword.includes(search.toLowerCase())
  );

  return (
    <div className="gallerypage">
      <h3>Originals for Sale</h3>
      {/* <h6>Use code "SERENITY10" for 10% off your purchase!</h6> */}
      <input
        className="search"
        type="text"
        placeholder="Key Word Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="gallery">
        {filteredArray.map((item) => (
          <div className="pic">
            <a href={item.etsy} target="_blank">
              <img src={item.baseImage} alt="art" />
            </a>
            <caption>{item.title}</caption>
            <caption>${item.price}</caption>
            <a className="buyPrints" href={item.etsy} target="_blank">
              Buy Now!
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
