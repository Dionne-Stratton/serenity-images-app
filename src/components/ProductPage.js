import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRouteMatch, Link } from "react-router-dom";
import art from "./GalleryArray";

export default function Item(props) {
  const {url} = useRouteMatch()
  const pageId = Number(url.substring(9, 11));

console.log(pageId)

  const item =
    art.find((it) => {
      // eslint-disable-next-line
      return it.id == pageId;
    }) || {};
    
    
    const [ podData, setPodData ] = useState(item.POD);
    const useData = (data) => {
      setPodData(podData.map((data) =>{
        return data
      }))
    };

    

    console.log(podData);
    console.log(item);
    console.log(art)

  const style = {
    background: item.buy !== "Buy Now!" ? "white" : "",
    display: item.buy === "Contact Me" ? "none" : "",
    padding: item.buy !== "Buy Now!" ? "0" : "",
    textDecoration: "none",
  };

  const clearStyle = {
    background: "white",
    textDecoration: "none",
  };

  const productButton = {
    display: item.buy !== "Contact Me" ? "none" : "",
  };



  return (
    <div className="homepage">
      <section className="section1">
        {/* <img src={item.image} alt="art" /> */}
        <img className="title-image" src={item.titleImage} alt={item.title} />
        <img className="title-image-mobile" src={item.titleImageMobile} alt={item.title} />
        <div className="aboutbox">
          <div className="textbox">
            {/* <h3>{item.title}</h3>
            <br></br>
            <p>Price: ${item.price}</p>
            <p>Size: {item.size}</p>
            <p>{item.description}</p>
            <br></br> */}
            <a
              style={style}
              className="buyPrints"
              href={item.etsyListing}
              // eslint-disable-next-line
              target="_blank"
            >
              {item.buy}
            </a>
            <div style={productButton}>
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="buyPrints"
                href={`mailto:SerenityImagesStudio@gmail.com`}
              >
                Contact Me
              </a>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </section>
      <h3>Print Options</h3>
        <div className="gallery">
            {podData.map((data) => (
            <div className="item-card" key={item.id}>
                <div className="pic">
                <Link to={data.link} className="pic" style={clearStyle}>
                    <img
                    className="items-list-image"
                    src={data.img}
                    alt="art"
                    />
                    <p>{data.s6LinkCaption}</p>
                </Link>
                </div>
            </div>
            ))}
      </div>
    
    </div>
  );
}
