import React from "react";
import profileimage2 from "../images/profileimage2.jpg";

const About = () => {
  return (
    <div className="aboutpage">
      <section className="section1">
        <img src={profileimage2} alt="me" />
        <div className="aboutbox">
          <h3>Meet the Artist</h3>
          <br></br>
          <p>
            "My passion is to create art that is simply beautiful and a pleasure
            to behold. My art is intended to be relatively natural, and always
            uplifting. Art that anyone can enjoy!"
          </p>
          <br></br>
          <p>~ Dionne Stratton</p>
          <br></br>
        </div>
      </section>
    </div>
  );
};

export default About;
