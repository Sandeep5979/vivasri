import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import HeaderUser from '../components/homePage/HeaderUser'
import { useSelector } from 'react-redux'

function Package() {

  const { userDetailLogin } = useSelector((state) => state.auth);

  return (
    <>
  { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

  <>
  <section className="con-plans">
    <div className=" inrbnr-2">
      <div className="container-fluid con-flu-padd"></div>
    </div>
    <div className="section-bg-con">
      <div className="container-fluid con-flu-padd-2">
        <div className="inrbnrContent-2">
          <div className="main-headings-plan">
            <h2>Membership Plans</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-md-4">
              <div className="plan-box">
                <div className="hheadings-2 text-center">
                  <h3>Free Plan</h3>
                  <div className="plancon-iner">
                    <div className="price d-flex justify-content-center">
                      <span
                        style={{
                          color: "#E4189F",
                          fontSize: 20,
                          marginRight: 3
                        }}
                      >
                        ₹
                      </span>
                      <h2>0.00</h2>
                      <span
                        style={{
                          position: "relative",
                          bottom: "-11px",
                          marginLeft: 5,
                          color: "#8E8E8E"
                        }}
                      >
                        per month
                      </span>
                    </div>
                    <a href="#" className="button select-plan whitebtnn">
                      Select Plan
                    </a>
                    <hr />
                    <div className="paln-features text-start">
                      <p>Package Features</p>
                      <ul className="plan-feat-ul">
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Create profile and set Partner preferences
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Basic Search Access
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          View limited number of profiles per day
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Chat only profile is interested
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Limited visibility in match suggestions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan-box">
                <div className="most-popular">
                  <p>Most Popular</p>
                </div>
                <div className="hheadings-2 text-center">
                  <h3>Gold Plan</h3>
                  <div className="plancon-iner">
                    <div className="price d-flex justify-content-center">
                      <span
                        style={{
                          color: "#E4189F",
                          fontSize: 20,
                          marginRight: 3
                        }}
                      >
                        ₹
                      </span>
                      <h2>1362</h2>
                      <span
                        style={{
                          position: "relative",
                          bottom: "-11px",
                          marginLeft: 5,
                          color: "#8E8E8E"
                        }}
                      >
                        per month
                      </span>
                    </div>
                    <a href="#" className="button select-plan">
                      Select Plan
                    </a>
                    <hr />
                    <div className="paln-features text-start">
                      <p>Package Features</p>
                      <ul className="plan-feat-ul ">
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Access Advanced search filters
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          View unlimited profiles with complete details
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Chat only profile is interested
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Priority placement of the profile
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan-box">
                <div className="hheadings-2 text-center">
                  <h3>Premium Plan</h3>
                  <div className="plancon-iner">
                    <div className="price d-flex justify-content-center">
                      <span
                        style={{
                          color: "#E4189F",
                          fontSize: 20,
                          marginRight: 3
                        }}
                      >
                        ₹
                      </span>
                      <h2>1900</h2>
                      <span
                        style={{
                          position: "relative",
                          bottom: "-11px",
                          marginLeft: 5,
                          color: "#8E8E8E"
                        }}
                      >
                        per month
                      </span>
                    </div>
                    <a href="#" className="button select-plan whitebtnn">
                      Select Plan
                    </a>
                    <hr />
                    <div className="paln-features text-start">
                      <p>Package Features</p>
                      <ul className="plan-feat-ul">
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Full Access of profile view
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Direct Chat access
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Voice and Video calling feature unlocked
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Appear at top in match suggestions
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Priority Customer service
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="style-h3-plans" style={{}}>
            Select any plan and after that make payment of that particular plan
          </h3>
        </div>
      </div>
    </div>
  </section>
  <div className="section">
    <div className="plan-banner">
      <div className="container-fluid  con-flu-padd-2">
        <div className="row">
          <div className="col-md-4 plan-ban-img">
            <img src="assets/img/plan-banner-img.png" alt="" />
          </div>
          <div className="col-md-8">
            <div className="con-banner">
              <h2 className="express-head">Express Yourself Better with</h2>
              <h2 className="plan-ban-head-2">Our Membership Plans</h2>
            </div>
            <div className="con-banner-plans">
              <div className="bg-banner-plan">
                <h5>A Relationship Manager is assigned to you who</h5>
                <ul className="plan-feat-ul-sm">
                  <li>
                    <img src="assets/img/cheack-circle-pink.png" alt="" />
                    Works on your profile to ensure it gets noticed
                  </li>
                  <li>
                    <img src="assets/img/cheack-circle-pink.png" alt="" />
                    Understands qualities that you are looking for in your
                    desired partner
                  </li>
                  <li>
                    <img src="assets/img/cheack-circle-pink.png" alt="" />
                    Sends Interests to handpicked profiles matching your
                    criteria
                  </li>
                  <li>
                    <img src="assets/img/cheack-circle-pink.png" alt="" />
                    Contacts profiles shortlisted by you and arrange meetings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div className="benifit">
      <div className="container-fluid con-flu-padd-2">
        <div className="box-benifits justify-content-center text-center">
          <div className="head-beanifits ">
            <h3>Paid Membership Benefits?</h3>
          </div>
          <p>
            Choose your membership plan now to find your partner! With a paid
            membership, you can seamlessly connect with your prospects and get
            more responses. Here are some key benefits:
          </p>
          <div className="col-12">
            <div className="row icon-beni-ss" style={{ margin: "40px 0px" }}>
              <div className="col-md-3">
                <div className="plan-benefit">
                  <img src="assets/img/icons/icon-banifits-1.png" alt="" />
                  <h6>Make unlimited voice/video calls</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plan-benefit">
                  <img src="assets/img/icons/icon-benifit-2.png" alt="" />
                  <h6>Get spotlights for better visibility</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plan-benefit">
                  <img src="assets/img/icons/icon-benifit-3.png" alt="" />
                  <h6>View contact details of the members</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plan-benefit">
                  <img src="assets/img/icons/icon-benifit-4.png" alt="" />
                  <h6>Show your contact details to other members</h6>
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

export default Package
