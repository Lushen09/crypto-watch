import React, { useEffect } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import '../styles/contact-styles.css'

const Contact = () => {

  return (
    
    <div className='contact'>

      <div className='contact-padding'>

        <div className='container animate-contact'>
          <div className='contact-heading text-center'>
            <h2>Got any Questions?</h2>
            <p>Do not hesitate to contact us through our various channels of support.</p>
          </div>

          <div className='contact-options text-center'>

            <div class="row text-light">

              <div class="col-md-4">
                <svg xmlns="http://www.w3.org/2000/svg" height={50} fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                </svg>
                <div className="contact-content">
                  <h3 className="card-subHeading">Live Chat</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                  <button type="button" class="btn btn-outline-light">Contact</button>
                </div>
              </div>

              <div class=" col-md-4">
                <svg xmlns="http://www.w3.org/2000/svg" height={50} fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                <div className="contact-content">
                  <h3 className="card-subHeading">Phone</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                  <button type="button" class="btn btn-outline-light">Contact</button>
                </div>
              </div>

              <div class=" col-md-4">
                <svg xmlns="http://www.w3.org/2000/svg" height={50} fill="currentColor" class="bi bi-disc" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1m4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5" />
                </svg>
                <div className="contact-content">
                  <h3 className="card-subHeading">Media</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                  <button type="button" class="btn btn-outline-light">Contact</button>
                </div>              
              </div>

            </div>

          </div>

          <div className='email-section text-center'>
            <h3>General Enquiries</h3>
            <p>For general enquiries, please email: <a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">cryptowatch@gmail.com</a></p>
          </div>

          <div className='partner-section'>
            <h2 className='text-center'>Become a Partner</h2>
            <p className='text-center'>Interested in becoming a partner? Leave your details below and one of our specialists will be in contact with you to discuss opportunities</p>

            <div className='contact-form'>
              <form class="row g-3">

                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Last Name</label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-6">
                  <label for="inputAddress" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputAddress1" />
                </div>
                <div class="col-md-6">
                  <label for="inputAddress2" class="form-label">Phone number</label>
                  <input type="number" class="form-control" id="inputAddress2" />
                </div>

                <div class="col-md-12">
                  <label for="inputState" class="form-label">Choose subject</label>
                  <select id="inputState" class="form-select">
                    <option selected>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div class="col-md-12">
                  <label for="inputZip" class="form-label">What best describes you?</label>
                </div>
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Freelancer
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Startup
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Small Business
                    </label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Non-Profit
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Enterprise
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Other
                    </label>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
                <div class="col-12 text-center">
                  <button type="submit" class="btn btn-success">Send</button>
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact