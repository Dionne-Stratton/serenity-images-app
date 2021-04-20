import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../API/axiosWithAuth";

const Shop = () => {
  // const [mocks, setMocks] = useState([]);

  // const getOriginalsMocks = () => {
  //   axiosWithAuth()
  //     .get("/v1/shops/2251517/products.json?limit=100")
  //     .then((res) => {
  //       console.log("Canvas Shop", res);
  //       setMocks(res.data.data.reverse());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getOriginalsMocks();
  //   console.log();
  // }, []);

  return (
    <div className="shoppage">
      <section className="section1">
        <h3>Originals for Sale</h3>
        <br></br>
        <p>Comming Soon!</p>
        <br></br>
        {/* <div className="originals">
          {mocks.map((item) => (
            <div className="item">
              <p>{item.title.substring(13)}</p>
              <p>{item.title.substring(0, 13)}</p>
              <img src={item.images[0].src} alt="art" />
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default Shop;
