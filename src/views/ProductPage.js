import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Item(props) {
  
  const { id } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`https://serenity-images-mongo.herokuapp.com/artwork/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err, "it has an error"));
  }, [id]);

  return (
    <div className="homepage">
      {item.map((image) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(image.img.data.data))
          );
          return (
            <div className="productPage">
                <img className="sectionStyle"
                    src={`data:image/png;base64,${base64String}`}
                    alt={image.title}
                  />
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
          )})}
    </div>
  );
}
