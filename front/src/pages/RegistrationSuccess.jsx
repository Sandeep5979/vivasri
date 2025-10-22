import React from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link } from 'react-router-dom'

function RegistrationSuccess() {
  return (
    <>
     <HeaderPage />

    <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Registration Success </h1>
        <ul className="inrbrnNav">
          <li>
            <a href="index.html">
              <img src="assets/img/icons/home.png" alt="home icon" />
            </a>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <a href="/#"> Login/Register</a>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <a href="/#">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
  <div className="register-sec ">
    <div className="container-fluid con-flu-padd  ">
      <div className="container-fluid  bg-register ">
        <div className="row pb-50 pt-40">
          <div className="maxwidss text-center ">
            <div className="ic-success ">
              <img
                src="assets/img/register/success-round_svgrepo.com.png"
                alt=""
              />
              <p>Registration complete</p>
              <h2>Welcome To Vivashri</h2>
            </div>
            <div className="cont-skip-butt">
              <button className="count-profile">
                <Link style={{ color: "white" }} to="/religion">
                  Continue to Complete Profile
                </Link>
              </button>
              <button className="con-skip">
                <Link style={{ color: "white" }} to="/">
                  Skip
                </Link>
              </button>
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

export default RegistrationSuccess
