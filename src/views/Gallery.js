import React, { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

export default function Gallery(props) {
  const { items } = props;
  const { url } = useRouteMatch();
  const [search, setSearch] = useState("");

  const clearStyle = {
    textDecoration: "none",
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Key Word Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {items.length === 0 && <p>Loading... Please wait...</p>}
      <div className="gallery">
        {items
          .filter((art) => art.keyword.includes(search.toLowerCase()))
          .map((item) => {
            let index = items.findIndex((indexed) => indexed._id === item._id);
            return (
              <div style={{ margin: "1%" }} key={item.id}>
                <div className="pic">
                  <Link to={`${url}/${index}`} style={clearStyle}>
                    <img src={item.imageURL} alt={item.title} />
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
