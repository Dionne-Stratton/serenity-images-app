import React, { useState } from "react";
import OriginalsArray from "../components/OriginalsArray";

const Shop = () => {
  const [search, setSearch] = useState("");

  let filteredArray = OriginalsArray.filter((art) =>
    art.category.includes(search.toLowerCase())
  );

  return (
    <div className="gallerypage">
      <h3>Originals for Sale</h3>
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
            <a className="buyPrints" href={item.etsy} target="_blank">
              {item.price}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
