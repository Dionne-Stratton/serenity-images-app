import React from "react";
import { useParams } from "react-router-dom";

export default function Item(props) {
  const { items } = props;
  const { id } = useParams();

  const item =
    items.find((it) => {
      return it.id == id;
    }) || {};

  const style = {
    background: item.buy === "Buy Now!" ? "lightblue" : "white",
    color: "black",
    textDecoration: "none",
    paddingLeft: "2%",
    paddingRight: "2%",
  };

    const clearStyle = {
      background: "white",
    //   color: "black",
      textDecoration: "none",
    };

  return (
    <div className="homepage">
      <section className="section1">
        <img src={item.image} alt="art" />
        <div className="aboutbox">
          <div className="textbox">
            <h3>{item.title}</h3>
            <br></br>
            <p>Price: ${item.price}</p>
            <p>Size: {item.size}</p>
            <p>{item.description}</p>
            <br></br>
            <a style={style} href={item.etsyListing} target="_blank">
              {item.buy}
            </a>
            <p></p>
            <br></br>
            <br></br>
          </div>
        </div>
      </section>
      <h3>Print Options</h3>
      <div className="gallery">
        <div className="pic">
          <a href={item.s6Framed} target="_blank">
            <img src={item.s6FramedImg} alt="art" />
          </a>
          <a style={clearStyle} href={item.s6Framed} target="_blank">
            Framed Print
          </a>
        </div>
        <div className="pic">
          <a href={item.s6CanvasPrint} target="_blank">
            <img src={item.s6CanvasPrintImg} alt="art" />
          </a>
          <a style={clearStyle} href={item.s6CanvasPrint} target="_blank">
            Canvas Print
          </a>
        </div>
        <div className="pic">
          <a href={item.s6Print} target="_blank">
            <img src={item.s6PrintImg} alt="art" />
          </a>
          <a style={clearStyle} href={item.s6Print} target="_blank">
            Art Print
          </a>
        </div>
        <div className="pic">
          <a href={item.s6Tapestry} target="_blank">
            <img src={item.s6TapestryImg} alt="art" />
          </a>
          <a style={clearStyle} href={item.s6Tapestry} target="_blank">
            Tapestry
          </a>
        </div>
      </div>
    </div>
  );
}
