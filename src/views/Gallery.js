import React, { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

export default function Gallery(props) {
  const { items } = props;
  console.log(items)
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
      <div className="gallery">
        {items
          .filter((art) =>
            art.keyword.includes(search.toLowerCase()))
          .map((item) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(item.img.data.data))
          );
          return (
            <div style={{margin: "1%"}} key={item.id}>
              <div className="pic">
                <Link to={`${url}/${item._id}`} style={clearStyle}>
                  <img
                    src={`data:image/png;base64,${base64String}`}
                    alt={item.title}
                  />
                  {/* <p>{item.title}</p> */}
                </Link>
              </div>
            </div>
          )
})}
      </div>
    </div>
  );
};

