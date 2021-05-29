import React, { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

export default function Gallery(props) {
  const { items } = props;
  const { url } = useRouteMatch();
  const [search, setSearch] = useState("");

  let filteredArray = items.filter((art) =>
    art.keyword.includes(search.toLowerCase())
  );

  const clearStyle = {
    textDecoration: "none",
  };


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
              <Link to={`${url}/${item.id}`} style={clearStyle}>
                <img
                  className="items-list-image"
                  src={item.image}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

