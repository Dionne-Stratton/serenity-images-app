import React from "react";
import fineart from "../images/fineartImage.jpg";
import fineartMobile from "../images/fineartImageMobile.jpg";

const Home = () => {
  return (
    <div className="homepage">
      <section className="centerSection">
        <img className="title-image" src={fineart} alt="person" />
        <img className="title-image-mobile" src={fineartMobile} alt="person" />
      </section>
    </div>
  );
};

export default Home;
