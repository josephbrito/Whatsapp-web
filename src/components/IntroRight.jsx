import React from "react";

import "./IntroRight.css";
import Intro from "../assets/images/intro.jpg";

const IntroRight = () => {
  return (
    <div className="container">
      <div className="intro-container">
        <div className="img-intro">
          <img src={Intro} alt="intro" />
        </div>
        <div className="keep">
          <h1>Keep your phone connected</h1>
          <p>
            WhatsApp connects to your phone to sync messages. To reduce data
            usage, connect your phone to Wi-Fi.
          </p>
        </div>
        <div className="ads">
          <p>
            Make calls from desktop with Whatsapp for Windows.{" "}
            <span style={{ color: "#169D84" }}>Get it here.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroRight;
