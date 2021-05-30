import React from "react";
import { useParams } from "react-router-dom";

export default function Item(props) {
  const { items } = props;
  const { id } = useParams();

  const item =
    items.find((it) => {
      // eslint-disable-next-line
      return it.id == id;
    }) || {};

  const style = {
    background: item.buy !== "Buy Now!" ? "white" : "",
    padding: item.buy !== "Buy Now!" ? "0" : "",
    textDecoration: "none",
  };

  const productButton = {
    display: item.buy !== "Shipping varies:" ? "none" : "",
  };

    const clearStyle = {
      background: "white",
      textDecoration: "none",
    };

    const hideNoCanvas = {
        display: item.s6CanvasPrintImg === null ? "none" : "",
    };

    const hideNoWallHanging = {
      display: item.s6WallHangingImage === null ? "none" : "",
    };

    const hideNoTapestry = {
      display: item.s6TapestryImg === null ? "none" : "",
    };

    const hideNoPoster = {
      display: item.s6PosterImage === null ? "none" : "",
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
        <div className="pic">
          <a
            href={item.s6Framed}
            // eslint-disable-next-line
            target="_blank"
          >
            <img src={item.s6FramedImg} alt="art" />
          </a>
          <a
            style={clearStyle}
            href={item.s6Framed}
            // eslint-disable-next-line
            target="_blank"
          >
            Framed Print
          </a>
        </div>
        <div className="pic" style={hideNoCanvas}>
          <a
            href={item.s6CanvasPrint}
            // eslint-disable-next-line
            target="_blank"
          >
            <img src={item.s6CanvasPrintImg} alt="art" />
          </a>
          <a
            style={clearStyle}
            href={item.s6CanvasPrint}
            // eslint-disable-next-line
            target="_blank"
          >
            Canvas Print
          </a>
        </div>
        <div className="pic">
          <a
            href={item.s6Print}
            // eslint-disable-next-line
            target="_blank"
          >
            <img src={item.s6PrintImg} alt="art" />
          </a>
          <a
            style={clearStyle}
            href={item.s6Print}
            // eslint-disable-next-line
            target="_blank"
          >
            Art Print
          </a>
        </div>
        <div className="pic" style={hideNoPoster}>
          <a
            href={item.s6Poster}
            // eslint-disable-next-line
            target="_blank"
          >
            <img src={item.s6PosterImage} alt="art" />
          </a>
          <a
            style={clearStyle}
            href={item.s6Poster}
            // eslint-disable-next-line
            target="_blank"
          >
            Poster
          </a>
        </div>
        <div className="pic" style={hideNoTapestry}>
          <a
            href={item.s6Tapestry}
            // eslint-disable-next-line
            target="_blank"
          >
            <img src={item.s6TapestryImg} alt="art" />
          </a>
          <a
            style={clearStyle}
            href={item.s6Tapestry}
            // eslint-disable-next-line
            target="_blank"
          >
            Tapestry
          </a>
        </div>
        <div className="pic" style={hideNoWallHanging}>
          <a
            href={item.s6WallHanging}
            // eslint-disable-next-line
            target="_blank"
          >
            <img src={item.s6WallHangingImage} alt="art" />
          </a>
          <a
            style={clearStyle}
            href={item.s6WallHanging}
            // eslint-disable-next-line
            target="_blank"
          >
            Wall Hanging
          </a>
        </div>
      </div>
    </div>
  );
}
