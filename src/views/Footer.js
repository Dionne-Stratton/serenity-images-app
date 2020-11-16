import React from "react";
import fbicon from "../images/fbicon.jpg";
import instaicon from "../images/instaicon.jpg";
import youtubeicon from "../images/youtubeicon.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="ender">
          <h2>Like what you see?</h2>
          <p>Email me at: SerentiyImagesStudio@gmail.com</p>
          <p>Or look for me on social media!</p>
        </div>
        <div className="icons">
          <a
            // eslint-disable-next-line
            target="_blank"
            href="https://www.facebook.com/serenityimagesart"
          >
            <img src={fbicon} alt="facebook logo" />
          </a>
          <a
            // eslint-disable-next-line
            target="_blank"
            href="https://www.instagram.com/living_word_designs_art_studio/"
          >
            <img src={instaicon} alt="instagram logo" />
          </a>
          <a
            // eslint-disable-next-line
            target="_blank"
            href="https://www.youtube.com/channel/UCOkeCTEFbJ7zRyGgF_eZd5Q?view_as=subscriber"
          >
            <img src={youtubeicon} alt="youtube logo" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
