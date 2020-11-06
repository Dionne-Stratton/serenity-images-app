import React from "react";
import aboutArt from "../images/aboutArt.jpg";

const Home = () => {
  return (
    <div className="homepage">
      <section className="section1">
        <img src={aboutArt} alt="art" />
        <div className="aboutbox">
          <div className="textbox">
            <h3>Why Fine Art?</h3>
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
