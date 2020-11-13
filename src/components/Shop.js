import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../API/axiosWithAuth";

const Shop = () => {
  const [canvasPrints, setcanvasPrints] = useState([]);
  const [posterPrints, setPosterPrints] = useState([]);
  const [phoneCases, setPhoneCases] = useState([]);

  const getCanvasPrints = () => {
    axiosWithAuth()
      .get("/v1/shops/1700629/products.json?limit=100")
      .then((res) => {
        console.log("Canvas Shop", res);
        setcanvasPrints(res.data.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPosterPrints = () => {
    axiosWithAuth()
      .get("/v1/shops/2224652/products.json?limit=100")
      .then((res) => {
        console.log("Poster Shop", res);
        setPosterPrints(res.data.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPhoneCases = () => {
    axiosWithAuth()
      .get("/v1/shops/2251242/products.json?limit=100")
      .then((res) => {
        console.log("Phone Case Shop", res);
        setPhoneCases(res.data.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getShops = () => {
    axiosWithAuth()
      .get("/v1/shops.json")
      .then((res) => {
        console.log("Shops:", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCanvasPrints();
    getPosterPrints();
    getPhoneCases();
    getShops();
    console.log();
  }, []);

  return (
    <div className="shoppage">
      <section className="section1">
        <h3>Shop</h3>
        <br></br>
        <p>Comming Soon!</p>
        <br></br>
        <div className="shop">
          {canvasPrints.map((item) => (
            <div className="item">
              <p>{item.title.substring(13)}</p>
              <p>{item.title.substring(0, 13)}</p>
              <img src={item.images[0].src} alt="art" />
            </div>
          ))}
          {posterPrints.map((item) => (
            <div className="item">
              <p>{item.title.substring(13)}</p>
              <p>{item.title.substring(0, 13)}</p>
              <img src={item.images[0].src} alt="art" />
            </div>
          ))}
          {phoneCases.map((item) => (
            <div className="item">
              <p>{item.title.substring(9)}</p>
              <p>{item.title.substring(0, 9)}</p>
              <img src={item.images[0].src} alt="art" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
