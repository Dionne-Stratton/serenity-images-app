import React from "react";
import about from "../images/profileimage.jpg";
import aboutMobile from "../images/profileimageMobile.jpg";
import more from "../images/aboutMeImage.jpg";
import moreMobile from "../images/aboutMeImageMobile.jpg";

const About = () => {
  return (
    <div className="aboutpage">
      <section className="section1">
        <img className="title-image" src={about} alt="person" />
        <img className="title-image-mobile" src={aboutMobile} alt="person" />
        <img className="title-image" src={more} alt="person" />
        <img className="title-image-mobile" src={moreMobile} alt="person" />
      </section>
    </div>
  );
};

export default About;