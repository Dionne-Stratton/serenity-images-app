import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Item(props) {
  const { items } = props;
  const { id } = useParams();
  const leftArrow = " < ";
  const rightArrow = " > ";
  const [index, setIndex] = useState(Number(id));
  const [indexLeft, setIndexLeft] = useState(0);
  const [indexRight, setIndexRight] = useState(0);
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      setItem([items[index]]);
      setIndexLeft(index - 1);
      setIndexRight(index + 1);
    }
  }, [id, items, index]);

  return (
    <>
      {item.length === 0 ? (
        <p>Loading... Please wait...</p>
      ) : (
        <div className="homepage">
          {item.map((image) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(image.img.data.data))
            );
            return (
              <div className="productPage" key={item.id}>
                <div className="sectionStyle image">
                  {index > 0 ? (
                    <Link
                      to={`/gallery/${indexLeft}`}
                      onClick={() => setIndex(index - 1)}
                      className="arrow"
                    >
                      {leftArrow}
                    </Link>
                  ) : (
                    <p className="arrow disabled">{leftArrow}</p>
                  )}
                  <img
                    src={`data:image/png;base64,${base64String}`}
                    alt={image.title}
                  />
                  {index < items.length - 1 ? (
                    <Link
                      to={`/gallery/${indexRight}`}
                      onClick={() => setIndex(index + 1)}
                      className="arrow"
                    >
                      {rightArrow}
                    </Link>
                  ) : (
                    <p class="arrow disabled">{rightArrow}</p>
                  )}
                </div>
                <div className="sectionStyle">
                  <h3>{image.title}</h3>
                  <br></br>
                  <p>Price: ${image.price} </p>
                  <p>Size: {image.size}</p>
                  <br></br>
                  <p>{image.description}</p>
                  <br></br>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buyPrints"
                    href={image.podLink}
                  >
                    Buy Prints
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
