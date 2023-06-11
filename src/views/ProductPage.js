import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Item(props) {
  const { items } = props;
  const { id } = useParams();
  const leftArrow = " < ";
  const rightArrow = " > ";
  const [index, setIndex] = useState(Number(id));
  const [indexLeft, setIndexLeft] = useState(0);
  const [indexRight, setIndexRight] = useState(0);

  const [item, setItem] = useState([]);
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  // setItem();
  // }, [id, items]);

  // useEffect(() => {
  //   axios
  //     .get(`https://serenity-images-mongo.herokuapp.com/artwork/${id}`)
  //     .then((res) => {
  //       setItem(res.data);
  //     })
  //     .catch((err) => console.log(err, "it has an error"));
  // }, [id]);
  useEffect(() => {
    // setIndex(items.findIndex((item) => item._id === id));
    if (items.length > 0) {
      setItem([items[index]]);
      setIndexLeft(index - 1);
      setIndexRight(index + 1);
    }
  }, [id, items, index]);

  // function handleLeftClick() {
  //   if (index > 0) {
  //     setIndex(index - 1);
  //   }
  // }

  // function handleRightClick() {
  //   if (-1 < index < items.length - 1) {
  //     setIndex(index + 1);
  //   }
  // }

  // let index = items.findIndex((item) => item._id === id);
  // let indexLeft = index - 1;
  // let indexRight = index !== -1 ? index + 1 : index;

  // if (indexLeft > -1) {
  //   idLeft = items[indexLeft]._id;
  // }
  // if (indexRight > -1 && indexRight < items.length) {
  //   idRight = items[indexRight]._id;
  // }
  console.log("index:", index);
  console.log("items", items);
  console.log("item", item);
  // console.log("indexLeft:", indexLeft);
  // console.log("newIdLeft:", idLeft);
  console.log("indexRight:", indexRight);
  console.log("indexLeft:", indexLeft);
  // console.log("id:", id);

  return (
    //if item is not found, display loading message instead of loading the page
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
              <div className="productPage">
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
                    <p className="left arrow disabled">{leftArrow}</p>
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
