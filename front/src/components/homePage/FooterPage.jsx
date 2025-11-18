import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function FooterPage() {

const { userDetailLogin } = useSelector((state) => state.auth);

  return (
    <>
    <footer className="footer-wrp-main position-relative wow animate__fadeIn">
  <div className="footerMain">
    <div className="site-width">
      <div className="text-center">
        <div className="footer-logo">
          <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/logo-light.png`} alt="" />
        </div>
        <h5 className="text-center mt-3">
          India’s most trusted matrimonial platform{" "}
        </h5>
      </div>
    </div>
    {userDetailLogin?._id ? null : (
    <div className="foot-disclaimer">
      <div className="site-width">
        <p>
          <span>Disclaimer:</span> Vivashri is an online platform created to help individuals connect with potential life partners. While we aim to offer a safe and respectful environment, we do not verify or guarantee the accuracy, reliability, or completeness of any user-provided information. Users are solely responsible for their interactions and are strongly advised to conduct their own background checks before proceeding with any communication or commitment. Vivashri is not involved in the personal decisions or outcomes of any match and cannot be held liable for disputes, misunderstandings, or losses that may occur. The platform only facilitates introductions and does not endorse or vouch for any member. By using this site, you agree to use it at your own risk and discretion. Always exercise caution and consult family or trusted sources when making important decisions.
        </p>
      </div>
    </div>
    )
  }
    <div className="site-width">
      <div className="footer-links-wrp">
        <div className="row">
          <div className="col-lg-12">
            <div className="ftr-link-bx footmainlinks">
              <ul>
                {userDetailLogin?._id ? null : (
                <li>
                  <a href="/">Home</a>
                </li>
                )}
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <a href="/basic-search">Search</a>
                </li>
                {
                
                /* userDetailLogin?._id ? null : (
                <li>
                  <a href="/#">Login/Register</a>
                </li>
                )
                */
                }
                <li>
                  <Link to="/membership-plan">Membership Plan</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {userDetailLogin?._id ? null : (
      
      <div className="footer-links-wrp">
        <div className="row">
          <div className="col-lg-12">
            <div className="ftr-link-bx">
              <ul>
                
                <li>
                  <a href="/#">Success Stories</a>
                </li>
                <li>
                  <a href="/#">Matchmaking</a>
                </li>
                <li>
                  <a href="/#">FAQ/Help</a>
                </li>
                <li>
                  <a href="/#">Feedback</a>
                </li>
                <li>
                  <a href="/#">Privacy Policy</a>
                </li>
                <li>
                  <a href="/#">Disclaimer</a>
                </li>
                <li>
                  <a href="/#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )}


    </div>
    <div className="site-width">
      <div className="row">
        <div className="col-lg-6">
           <div className="foot-social">
              <h6>Download Vivashri App</h6>
              <ul>
                <li>
                  <Link
                    to="#"
                    title="Download App On Google Play Store"
                    className="me-lg-2"
                  >
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/assets/img/google-play.png`}
                      alt=""
                      style={{ maxHeight: 40 }}
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#" title="Download App On Apple Play Store">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/assets/img/apple-play.png`}
                      alt=""
                      style={{ maxHeight: 40 }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          
        </div>
        { /* <div className="col-lg-4">
          <div className="foot-social foot-number justify-content-center">
            <h6>Toll Free Number</h6>
            <a href="tel:1800 180 350498" target="_blank" rel='noreferrer'>
              1800 180 350498
            </a>
          </div>
        </div> */ }
        <div className="col-lg-6 ">
            <div className="foot-social justify-content-end">
            <h6>Follow Us On</h6>
            <ul>
              <li>
                <Link to="#" target="_blank" title="Follow Us on Facebook">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/facebook.png`}
                    alt="Facebook icon"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" title="Follow Us on Instagram">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/instagram.png`}
                    alt="Instagram icon"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" title="Follow Us on X">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/x.png`} alt="X icon" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" title="Follow Us on linkedin">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/linkedin.png`}
                    alt="linkedin icon"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" title="Follow Us on threads">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/threads.png`} alt="Threads icon" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" title="Follow Us on youtube">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/youtube.png`} alt="Youtube icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-btm-wrp">
    <div className="site-width">
      <div className="footer-btm-bx">
        <div className="row">
          <div className="col-md-6 col-lg-6 ">
            <p className="copy-txt text-center text-md-start">
              Copyright © Vivashri | All Rights Reserved
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="copy-txt text-center text-md-end">
              <div className="akslogo">
                <a
                  href="https://www.akswebsoft.com"
                  rel='noreferrer'
                  target="_blank"
                  title="AKS Websoft Consulting Pvt. Ltd."
                >
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/assets/img/aks.png`}
                    alt="AKS Websoft Consulting Pvt. Ltd."
                    title="AKS Websoft Consulting Pvt. Ltd."
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default FooterPage
