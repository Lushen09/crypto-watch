import React from 'react'
import "../styles/testimonial-styles.css"
import Image1 from "../images/Testimonials/test1.jpg"
import Image2 from "../images/Testimonials/test2.jpg"
import Image3 from "../images/Testimonials/test3.jpg"

const Testimonials = () => {
    return (
        <div className='testimonial' id='testimonials'>

            <div className='testimonial-padding'>

                <div className='container text-center'>

                    <div className='testimonial-heading-section'>
                        <h2 className='testimonial-heading'>Client Testimonials</h2>
                        <p className='testimonial-subheading'>What our clients say about our service.</p>
                    </div>

                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active carousel-background">
                                <div class="carousel-caption d-md-block">
                                    <img src={Image1} alt='testimonial 1' className='testimonial-image'></img>
                                    <div className='testimonial-content'>
                                        <h5>Emily Rodriguez</h5>
                                        <p>"User-friendly interface, transparent pricing, and prompt withdrawals. Finally found a trustworthy platform to manage my crypto portfolio hassle-free!"</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-background">
                                <div class="carousel-caption d-md-block">
                                    <img src={Image2} alt='testimonial 2' className='testimonial-image'></img>
                                    <div className='testimonial-content'>
                                        <h5>Marcus Thompson</h5>
                                        <p>"This platform revolutionized my approach to crypto trading! Seamless interface, robust security, and exceptional customer support!"</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-background">
                                <div class="carousel-caption d-md-block">
                                    <img src={Image3} alt='testimonial 3' className='testimonial-image'></img>
                                    <div className='testimonial-content'>
                                        <h5>Madison Carter</h5>
                                        <p>"Lightning-fast transactions, low fees, and a wide range of coins to choose from. Highly recommended for both beginners and seasoned traders!"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Testimonials