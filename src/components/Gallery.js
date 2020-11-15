import React, { useState } from "react";
import GalleryArray from "../components/GalleryArray";

const Gallery = () => {
  const [search, setSearch] = useState("");

  let filteredArray = GalleryArray.filter((art) =>
    art.category.includes(search)
  );

  return (
    <div className="gallerypage">
      <h3>Gallery</h3>
      <input
        className="search"
        type="text"
        placeholder="Search Gallery"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="gallery">
        {filteredArray.map((item) => (
          <div className="pic">
            <img src={item.baseImage} alt="art" />
            <caption>{item.title}</caption>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
