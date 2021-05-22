import React, { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

export default function Gallery(props) {
  const { items } = props;
  const { url, path } = useRouteMatch();
  const [search, setSearch] = useState("");

  let filteredArray = items.filter((art) =>
    art.keyword.includes(search.toLowerCase())
  );


  return (
    <div className="gallerypage">
      <input
        className="search"
        type="text"
        placeholder="Key Word Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="gallery">
        {filteredArray.map((item) => (
          <div className="item-card" key={item.id}>
            <div className="pic">
              <a href={item.image} target="_blank">
                <img src={item.image} alt="art" />
              </a>
              <caption>{item.title}</caption>
              <Link to={`${url}/${item.id}`} className="buyPrints">
                <p>Shop</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

