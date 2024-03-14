import React from 'react'
import "../styles/download-styles.css"
import Phone from '../images/Download/download.png'
import Apple from '../images/Download/apple.svg'
import Google from '../images/Download/google.svg'

const Download = () => {
    return (
        <div className='download' id='download'>

            <div className='download-padding'>

                <div class="container text-center">

                    <div class="row">

                        <div class="col-md-6">
                            <h2 className='download-heading'>Download the app now!</h2>
                            <p className='download-text'>Available on your favorite store. Start your premium experience now</p>
                            <div class="download-buttons">
                                <a href="#"><img src={Apple} alt="apple" /></a>
                                <a href="#"><img src={Google} alt="google" /></a>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <img src={Phone} alt="phone" className="phone" />
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Download