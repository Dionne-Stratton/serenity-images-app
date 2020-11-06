import React from "react";
import GalleryArray from "../components/GalleryArray";

const Gallery = () => {
  return (
    <div className="gallerypage">
      {/* <section className="section1"> */}
      <h3>Gallery</h3>
      <br></br>
      <div className="gallery">
        {GalleryArray.map((item) => (
          <div className="pic">
            <img src={item.baseImage} alt="art" />
            <caption>{item.title}</caption>
          </div>
        ))}
      </div>
      {/* </section> */}
    </div>
  );
};

export default Gallery;
