import React, { useState, useEffect } from 'react'
import '../styles/about-styles.css'
import logo1 from '../images/About/logo1.png';
import logo2 from '../images/About/logo2.png';
import logo3 from '../images/About/logo3.png';
import logo4 from '../images/About/logo4.png';
import logo5 from '../images/About/logo5.png';
import logo6 from '../images/About/logo6.png';
import logo7 from '../images/About/logo7.png';
import logo8 from '../images/About/logo8.png';
import logo9 from '../images/About/logo9.png';
import logo10 from '../images/About/logo10.png';
import about1 from '../images/About/about-logo1.png';
import about2 from '../images/About/about-logo2.png';
import about3 from '../images/About/about-logo3.png';


const About = () => {

    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const elementPosition = document.getElementById('about-content').offsetTop;
    
        if (scrollPosition > elementPosition) {
          setIsVisible(true);
        }
      };

      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])
    

    return (
        <div className='about text-light' id='about'>

            <div className='about-padding'>

                <div class='container text-center '>

                    <div className='about-sub-heading'>
                        <h3>Trusted by <span>Professionals and Teams</span></h3>
                    </div>

                    <div className='about-banner animate'>
                        <div class="ticker-container">
                            <div class="ticker-wrapper">
                                <div class="ticker-transition">

                                    <div class="ticker-item">
                                        <img src={logo1} alt="logo1" className='logo-image'></img>
                                        WealthWise
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo2} alt="logo1" className='logo-image'></img>
                                        CapitalCraft
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo3} alt="logo1" className='logo-image'></img>
                                        MarketMaven
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo4} alt="logo1" className='logo-image'></img>
                                        Tradetact
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo5} alt="logo1" className='logo-image'></img>
                                        Profitpulse
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo6} alt="logo1" className='logo-image'></img>
                                        FinForte
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo7} alt="logo1" className='logo-image'></img>
                                        FinanceFoundry
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo8} alt="logo1" className='logo-image'></img>
                                        TradeTrove
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo9} alt="logo1" className='logo-image'></img>
                                        CapitalCrest
                                    </div>

                                    <div class="ticker-item">
                                        <img src={logo10} alt="logo1" className='logo-image'></img>
                                        MarketMastery
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`about-content ${isVisible ? 'animate': ''} `}>

                        <h2 id='about-content' className='about-heading'>Where Every Click Counts: Start Your <span className='about-gradient'>Crypto Journey Here</span></h2>

                        <div class="container text-center about-section">
                            <div class="row">
                                <div class="column-style col-lg-4">
                                    <img
                                        src={about1}
                                        alt="about-image1"
                                        className="about-image"
                                    />
                                    <div className="column-content">
                                        <h3 className="card-subHeading">Learn</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                                    </div>
                                </div>
                                <div class="column-style col-lg-4">
                                    <img
                                        src={about2}
                                        alt="about-image2"
                                        className="about-image"
                                    />
                                    <div className="column-content">
                                        <h3 className="card-subHeading">Earn</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                                    </div>
                                </div>
                                <div class="column-style col-lg-4">
                                    <img
                                        src={about3}
                                        alt="about-image3"
                                        className="about-image"
                                    />
                                    <div className="column-content">
                                        <h3 className="card-subHeading">Collaborate</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About