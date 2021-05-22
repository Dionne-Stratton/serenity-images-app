// import React, { useEffect, useState } from "react";
// import { axiosWithAuth } from "../API/axiosWithAuth";

// const POD = () => {
  // const [canvasPrints, setcanvasPrints] = useState([]);

  // const getCanvasPrints = () => {
  //   axiosWithAuth()
  //     .get("/v1/shops/1700629/products.json?limit=100")
  //     .then((res) => {
  //       console.log("Canvas Shop", res);
  //       setcanvasPrints(res.data.data.reverse());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //

  // const getShops = () => {
  //   axiosWithAuth()
  //     .get("/v1/shops.json")
  //     .then((res) => {
  //       console.log("Shops:", res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getCanvasPrints();
  //   getShops();
  //   console.log();
  // }, []);

  // return (
  //   <div className="shoppage">
  //     <section className="section1">
  //       <h3>Print on Demand</h3>
  //       <br></br>
  //       <p>Comming Soon!</p>
  //       <br></br>
        // {/* <div className="pod">
        //   {canvasPrints.map((item) => (
        //     <div className="item">
        //       <p>{item.title.substring(13)}</p>
        //       <p>{item.title.substring(0, 13)}</p>
        //       <img src={item.images[0].src} alt="art" />
        //     </div>
        //   ))}
        // </div> */}
//       </section>
//     </div>
//   );
// };

// export default POD;
