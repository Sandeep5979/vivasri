import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../global.css"
import { useRef } from "react";



export default function GroomList() {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnHover: true,
    dots: false,
    arrows: false, // turn off built-in arrows
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1.5 } },
    ],
  };

  return (
    <>
    <Slider ref={sliderRef} {...settings}>
      <div className="item">
                <div className="whats-new-sec wow fadeInUp animated">
                  <div className="inner-box">
                    <div className="whats-new-sec-img">
                      <a
                        href="profile-details.html"
                        className="button profiledet-btn"
                      >
                        <i className="fa-solid fa-magnifying-glass" /> View
                        Details
                      </a>
                      <a href="profile-details.html">
                        <img src="assets/img/profile/groom1.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="whats-new-content">
                      <h6>
                        <a href="profile-details.html">Mr. Arjun Kanodiya</a>
                      </h6>
                      <ul>
                        <li>Cardiologist</li>
                        <li>MBBS, MD</li>
                      </ul>
                      <p>
                        <span>5’4</span> <span>30 years</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="whats-new-sec wow fadeInUp animated">
                  <div className="inner-box">
                    <div className="whats-new-sec-img">
                      <a
                        href="profile-details.html"
                        className="button profiledet-btn"
                      >
                        <i className="fa-solid fa-magnifying-glass" /> View
                        Details
                      </a>
                      <a href="profile-details.html">
                        <img src="assets/img/profile/groom2.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="whats-new-content">
                      <h6>
                        <a href="profile-details.html">Mr. Manish Bishnoyi</a>
                      </h6>
                      <ul>
                        <li>Cardiologist</li>
                        <li>MBBS, MD</li>
                      </ul>
                      <p>
                        <span>5’4</span> <span>30 years</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="whats-new-sec wow fadeInUp animated">
                  <div className="inner-box">
                    <div className="whats-new-sec-img">
                      <a
                        href="profile-details.html"
                        className="button profiledet-btn"
                      >
                        <i className="fa-solid fa-magnifying-glass" /> View
                        Details
                      </a>
                      <a href="profile-details.html">
                        <img src="assets/img/profile/groom1.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="whats-new-content">
                      <h6>
                        <a href="profile-details.html">Mr. Arjun Kanodiya</a>
                      </h6>
                      <ul>
                        <li>Cardiologist</li>
                        <li>MBBS, MD</li>
                      </ul>
                      <p>
                        <span>5’4</span> <span>30 years</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="whats-new-sec wow fadeInUp animated">
                  <div className="inner-box">
                    <div className="whats-new-sec-img">
                      <a
                        href="profile-details.html"
                        className="button profiledet-btn"
                      >
                        <i className="fa-solid fa-magnifying-glass" /> View
                        Details
                      </a>
                      <a href="profile-details.html">
                        <img src="assets/img/profile/groom2.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="whats-new-content">
                      <h6>
                        <a href="profile-details.html">Mr. Manish Bishnoyi</a>
                      </h6>
                      <ul>
                        <li>Cardiologist</li>
                        <li>MBBS, MD</li>
                      </ul>
                      <p>
                        <span>5’4</span> <span>30 years</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
    </Slider>
    
    <div className="owl-nav">
      <button onClick={() => sliderRef.current.slickPrev()} type="button" role="presentation" className="owl-prev"><i className="fa-solid fa-angle-left"></i></button>
      <button onClick={() => sliderRef.current.slickNext()} type="button" role="presentation" className="owl-next"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    
      </>
  );
}
