import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

export default function Gallery(props) {
  const { search, medium, onChange, filtered } = props;
  const { url } = useRouteMatch();

  const clearStyle = {
    textDecoration: "none",
  };

  console.log("search", search);
  console.log("medium", medium);
  console.log("fileteredStock", filtered);

  return (
    <div>
      <input
        // onChange is setting the state of the search variable to the value of the input field as the user types to be used in the filter method below
        className="search"
        name="search"
        type="text"
        placeholder="Key Word Search"
        onChange={(e) => onChange(e)}
        value={search}
      />
      {/* // create a dropdown menu to filter the items by medium */}
      <select
        className="medium"
        name="medium"
        onChange={(e) => onChange(e)}
        value={medium}
      >
        <option value="all">All</option>
        <option value="digital">Digital</option>
        <option value="acrylic">Acrylic</option>
        <option value="ink">Ink</option>
      </select>

      {/* if the items array is empty, display the loading message */}
      {filtered.length === 0 && <p>Loading... Please wait...</p>}
      <div className="gallery">
        {filtered.reverse()
          //we are filtering the items array to only display the items that have a keyword that includes the search variable. The search variable is set to the value of the input field as the user types. The filter method is case sensitive so we are converting the search variable to lowercase to ensure that the filter method works as expected
          // .filter((art) => art.keyword.includes(search.toLowerCase()))
          // .filter((art) => {
          //   if (art.medium === medium || medium === "all") {
          //     return true;
          //   }
          //   return false;
          // })
          .map((item) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(item.img.data.data))
            );
            //we are finding the index of the item in the items array so that we can use it in the Link to the ProductPage component
            let index = filtered.findIndex(
              (indexed) => indexed._id === item._id
            );
            return (
              <div style={{ margin: "1%" }} key={item.id}>
                <div className="pic">
                  <Link to={`${url}/${index}`} style={clearStyle}>
                    <img
                      src={`data:image/png;base64,${base64String}`}
                      alt={item.title}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
