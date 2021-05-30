import React from "react";
import aboutArt from "../images/serenityartadd.mp4";

const Home = () => {
  return (
    <div className="homepage">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src={aboutArt} type="video/mp4" />
      </video>
      <section className="section1">
        <div>
          <div>
            <h4 className="vidover">Visit the Gallery for More</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>
              At Serenity Images Art we strive to create work that uplifts,
              encourages, and inspires. Art that leaves a smile on your face.
              Because life can be hard, but together we can thrive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
