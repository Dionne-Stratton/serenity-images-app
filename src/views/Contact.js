import React from "react";
import contact from "../images/contact.jpg";

const Contact = () => {
  return (
    <div className="homepage">
      <section className="section1">
        <img src={contact} alt="art" />
        <div className="aboutbox">
          <div className="textbox">
            <h3>Got Questions?</h3>
            <br></br>
            <p>Email me at: SerentiyImagesStudio@gmail.com</p>
            <p>Or look for me on social media!</p>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
