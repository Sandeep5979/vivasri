import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'


function NoMatch() {
  return (
    
    <>
    <HeaderPage />
    <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Page Not Found </h1>
        <ul className="inrbrnNav">
          <li>
            <a href="/">
              <img src="assets/img/icons/home.png" alt="home icon" />
            </a>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <a href="/#">Page Not Found</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="mt-5">
    <div className="my-5 pb-4">
      <div className="container-fluid con-flu-padd  ">
        <div className="no-content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="no-content-wrap">
                  <span className="extra-big">404</span>
                  <h1>PAGE CAN'T BE FOUND</h1>
                  <p>
                    The page you are looing for not found, return to the home
                    page and continue.
                  </p>
                  <br />
                  <Link href="/" class="button homeform-btn d-inline px-3 py-2 mt-5"><i class="fa-solid fa-home"></i> Go to Home Page  </Link>
                
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

export default NoMatch
