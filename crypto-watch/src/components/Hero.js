import React from 'react';
import '../styles/hero-styles.css';
import Hand from "../images/Hero/hand.jpg"

const Hero = () => {
  return (
    <div className="hero" id='home'>
      <div class="container text-center">
        <div className="hero-padding-section">

          <div className="hero-content">
            <h1>
              Revolutionlize Your Trading With Our
              <span className="hero-gradient"> Crypto Assistance</span>
            </h1>
            <p>24 hour live tracking cryptocurrency markets to keep you updated and ahead of the curve.</p>
          </div>

          <div className="hero-sub-content">

            <div class="container text-center">
               
                  <img src={Hand} alt="Hand with hologram" className="hero-image img-fluid"></img>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero