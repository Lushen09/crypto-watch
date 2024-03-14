import React, {useEffect, useState} from 'react'
import '../styles/features-styles.css'
import Logo1 from '../images/Features/feature-logo1.png'
import Logo2 from '../images/Features/feature-logo2.png'
import Logo3 from '../images/Features/feature-logo3.png'
import Logo4 from '../images/Features/feature-logo4.png'

const Features = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Animation for the market section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('features-animation').offsetTop;
  
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
    <div className='features text-light' id='features'>

      <div className='container'>

        <div className='features-padding'>

          <div id='features-animation' className={`row ${isVisible ? 'animate-features': ''} `}>

            <div class="col-md-6 text-center">
              <div className='features-content sticky'>
                <h1 className='features-heading'>Why Join Us</h1>
                <p>From real-time price updates to comprehensive market analysis, we've got you covered. Our intuitive interface makes it easy to monitor your favorite cryptocurrencies, analyze trends, and make informed decisions.

                  Ready to take the next step? Sign up today and join thousands of users who trust Crypto Watch to help them navigate the exciting world of cryptocurrency trading.</p>
              </div>
            </div>

            <div class="col-md-6">

              <div className='features-box sticky'>
                <div className='icon-section'>
                  <img src={Logo2} alt='Logo1' className='icon-image'></img>
                </div>
                <h2>Comprehensive Tracking</h2>
                <p>Gain real-time insights into the cryptocurrency market with our advanced tracking tools. Monitor prices, analyze trends, and stay informed at all times.</p>
              </div>

              <div className='features-box sticky'>
                <div className='icon-section'>
                  <img src={Logo1} alt='Logo1' className='icon-image'></img>
                </div>
                <h2>User-Friendly Interface</h2>
                <p>Our platform is designed with simplicity in mind, making it easy for both beginners and experienced traders to navigate.</p>
              </div>

              <div className='features-box sticky'>
                <div className='icon-section'>
                  <img src={Logo3} alt='Logo1' className='icon-image'></img>
                </div>
                <h2>Community Engagement</h2>
                <p>Join a thriving community of like-minded individuals who share your passion for cryptocurrency. Connect with fellow traders, share insights, and learn from each other's experiences.</p>
              </div>

              <div className='features-box sticky'>
                <div className='icon-section'>
                  <img src={Logo4} alt='Logo1' className='icon-image'></img>
                </div>
                <h2>Secure and Reliable</h2>
                <p>Rest assured that your funds and personal information are safe with us. We prioritize security above all else, employing the latest encryption technology to protect your assets.</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Features
