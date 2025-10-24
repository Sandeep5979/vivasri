import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import HeaderUser from '../components/homePage/HeaderUser'
import { useSelector } from 'react-redux'

function AboutUs() {

  const { userDetailLogin } = useSelector((state) => state.auth);

  return (
    <>
  { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>About Us</h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <Link to="#">About Us</Link>
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
          <div className="col-lg-6">
            <img
              src="assets/img/about-img.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-lg-5">
            <div className="welcomehd mt-1 mb-0">
              <h2>About</h2>
              <h6>Vivashri</h6>
            </div>
            <div className="welcomepara">
              <p className="mb-5 d-block">
                “Where meaningful connections turn into lifelong relationships.
                We believe every journey to love begins with trust, respect, and
                understanding. Our platform is designed to bring together
                like-minded individuals and families who share common values,
                traditions, and aspirations. At Perfect Match, it’s not just
                about finding a partner—it’s about discovering your true
                companion for life”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="numberstats overflow-hidden bg2 pt-50 pb-50">
    <div className="site-width">
      <div className="row">
        <div className="col-6 col-lg">
          <div className="statcol my-2">
            <img src="assets/img/icons/staticon1.png" alt="stat icon" />
            <div className="counter text-white" data-target={4251}>
              4251
            </div>
            <h4 className="text-white">Grooms</h4>
          </div>
        </div>
        <div className="col-6 col-lg">
          <div className="statcol my-2">
            <img src="assets/img/icons/staticon2.png" alt="stat icon" />
            <div className="counter text-white" data-target={5148}>
              5148
            </div>
            <h4 className="text-white">Brides</h4>
          </div>
        </div>
        <div className="col-6 col-lg">
          <div className="statcol my-2">
            <img src="assets/img/icons/staticon3.png" alt="stat icon" />
            <div className="counter text-white" data-target={1875}>
              1875
            </div>
            <h4 className="text-white">Divorcee Grooms</h4>
          </div>
        </div>
        <div className="col-6 col-lg">
          <div className="statcol my-2">
            <img src="assets/img/icons/staticon4.png" alt="stat icon" />
            <div className="counter text-white" data-target={2876}>
              2876
            </div>
            <h4 className="text-white">Divorcee Brides</h4>
          </div>
        </div>
        <div className="col-12 col-lg">
          <div className="statcol my-2">
            <img src="assets/img/icons/staticon5.png" alt="stat icon" />
            <div className="counter text-white" data-target={8975}>
              8975
            </div>
            <h4 className="text-white">Success Stories</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="afterbnr-section pt-50 pb-50">
    <div className="site-width">
      <div className="row">
        <div className="col-lg-6">
          <div className="visionbox">
            <div className="onle_line">
              <img src="assets/img/mission.png" className="img-fluid" alt='' />
              <h2>Our Mission</h2>
            </div>
            <p>
              Vivashri is committed to creating meaningful, lasting
              relationships by offering personalized and trusted matchmaking
              services rooted in cultural values and modern understanding. Our
              mission is to support individuals from diverse backgrounds,
              especially within the Punjabi and Sikh communities, in finding the
              right life partner with dignity, discretion, and dedication.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visionbox">
            <div className="onle_line">
              <img src="assets/img/vision.png" className="img-fluid" alt="" />
              <h2>Our Vission</h2>
            </div>
            <p>
              We aim to bridge families with integrity, transparency, and
              respect—ensuring every match is made with care, authenticity, and
              deep personal attention. Our mission is to support individuals
              from diverse backgrounds, especially within the Punjabi and Sikh
              communities, in finding the right life partner with dignity,
              discretion, and dedication.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterPage />
</>

  )
}

export default AboutUs
