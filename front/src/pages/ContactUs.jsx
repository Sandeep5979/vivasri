import React from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link } from 'react-router-dom'


function ContactUs() {
  return (
    
    <>
    <HeaderPage />
    <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Contact Us</h1>
        <ul className="inrbrnNav">
          <li>
            <a href="/">
              <img src="assets/img/icons/home.png" alt="home icon" />
            </a>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <a href="/#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
    <div className="register-sec">
      <div className="site-width">
        <div className="row pt-5">
          <div className="col-lg-7">
            {/* start */}
            <div className="contactinfoWrapper">
              <div className="contactInfo">
                <div
                  className="titleSection left wow animate__fadeInDown"
                  style={{ visibility: "visible", animationName: "fadeInDown" }}
                >
                  <h4>Contact Us</h4>
                  <h2>Contact Details</h2>
                  {/* <p>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores at magni!
                                  </p> */}
                  <span className="divider">
                    <img src="assets/img/divider1.png" alt="img" />
                  </span>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="contactInfoCard d-flex align-item-center">
                      <div className="ctinfoCIco">
                        <img src="assets/img/location.svg" alt="ico" />
                      </div>
                      <div className="ctinfoTitle">
                        <h4>VIVASHRI PRIVATE LIMITED</h4>
                        <h6>
                          E - 49/5, First Floor, Okhla Industrial Area Phase I,
                          New Delhi, 110020.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contactInfoCard d-flex align-item-center">
                      <div className="ctinfoCIco">
                        <img src="assets/img/call.svg" alt="ico" />
                      </div>
                      <div className="ctinfoTitle">
                        <h4>Call</h4>
                        <h6>
                          <a href="tel:917631110005" target="_blank" rel='noreferrer'>
                            +91 7631110005
                          </a>{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                  
                  { /* <div className="col-md-6">
                    <div className="contactInfoCard d-flex align-item-center">
                      <div className="ctinfoCIco">
                        <img src="assets/img/email.svg" alt="ico" />
                      </div>
                      <div className="ctinfoTitle">
                        <h4>Email</h4>
                        <h6>
                          <a href="mailto:" target="_blank" rel='noreferrer'>
                            vivashri@gmail.com
                          </a>{" "}
                        </h6>
                      </div>
                    </div>
                  </div> */ }

                </div>
              </div>
              <div className="ourSocials mt-4">
                <h4>Our Social Media</h4>
                <ul className="sociaMediaIcons">
  <li>
    <Link to="#" target="_blank" title="follow us on Facebook">
      <i className="fa-brands fa-facebook-f" />
    </Link>
  </li>
  <li>
    <Link to="#" target="_blank" title="follow us on Instagram">
      <i className="fa-brands fa-instagram" />
    </Link>
  </li>
  <li>
    <Link to="#" target="_blank" title="follow us on X">
      <i className="fa-brands fa-x-twitter" />
    </Link>
  </li>
  <li>
    <Link to="#" target="_blank" title="follow us on Linkedin">
      <i className="fa-brands fa-linkedin-in" />
    </Link>
  </li>
  <li>
    <Link to="#" target="_blank" title="follow us on Threads">
      <i className="fa-brands fa-threads" />
    </Link>
  </li>
  <li>
    <Link to="#" target="_blank" title="Like us on Youtube">
      <i className="fa-brands fa-youtube" />
    </Link>
  </li>
</ul>

              </div>
            </div>
            {/* end */}
          </div>
          <div className="col-lg-5">
            <div className="ic-con">
              <h3 className="">Get In Touch</h3>
              <p>Fill the form below to make enquiry</p>
              <div className="col-12">
                <div className="line-bg" style={{ width: "100%" }} />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="inputs-marg nam-inp mb-0">
                    <label htmlFor="" className="mb-2">
                      Your Name <span style={{ color: "#FF0A0A" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inputs-marg nam-inp mb-0">
                    <label htmlFor="" className="mb-2">
                      Email <span style={{ color: "#FF0A0A" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inputs-marg nam-inp mb-0">
                    <label htmlFor="" className="mb-2">
                      Mobile No. <span style={{ color: "#FF0A0A" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inputs-marg nam-inp mb-0">
                    <label htmlFor="" className="mb-2">
                      Enquiry For{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="inputs-marg nam-inp mb-0">
                    <label htmlFor="" className="mb-2">
                      Your Message{" "}
                    </label>
                    <textarea
                      className="form-control"
                      style={{ width: "100%" }}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="nam-inp mt-3 text-end">
                  <button className="countiniue p-0">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>



    <FooterPage /> 

     
    </>
    
  )
}

export default ContactUs
