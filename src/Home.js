import React from "react";
import aboutArt from "../images/serenityartadd.mp4";
import fineart from "../images/fineartImage.jpg";
import fineartMobile from "../images/fineartImageMobile.jpg";

const Home = () => {
  return (
    <div className="homepage">
      <section>
        <img className="title-image" src={fineart} alt="person" />
        <img className="title-image-mobile" src={fineartMobile} alt="person" />
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={aboutArt} type="video/mp4" />
      </video>
      </section>
    </div>
  );
};

export default Home;
