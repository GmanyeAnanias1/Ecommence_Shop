import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import h_image from "../Assets/h_image.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
        
          <div>Latest Collection</div>
          
        </div>
      </div>
      <div className="hero-right">
        <img src={h_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
