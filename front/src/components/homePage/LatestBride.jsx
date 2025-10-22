import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../global.css"
import { useRef } from "react";



export default function LatestBride() {
  const sliderRef = useRef(null);
  const settings = {
     infinite: true, // loop: true
    slidesToShow: 2, // default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // autoplayTimeout
    speed: 550, // smartSpeed
    pauseOnHover: true, // autoplayHoverPause
    dots: false,
    arrows: false, // nav: true
    responsive: [
      {
        breakpoint: 1000,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1.5 },
      },
    ],
  };

  return (
    <>
    <Slider ref={sliderRef} {...settings}>
      <div className="item">
                <div className="videotesti-cont testiimg">
                  <a href="/#">
                    <img src="assets/img/testi-img1.jpg" alt="img" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="videotesti-cont testiimg">
                  <a href="/#">
                    <img src="assets/img/testi-img2.jpg" alt="img" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="videotesti-cont testiimg">
                  <a href="/#">
                    <img src="assets/img/testi-img1.jpg" alt="img" />
                  </a>
                </div>
              </div>

              
    </Slider>
    
    <div className="owl-nav-latest">
      <button onClick={() => sliderRef.current.slickPrev()} type="button" role="presentation" className="owl-prev"><i className="fa-solid fa-angle-left"></i></button>
      <button onClick={() => sliderRef.current.slickNext()} type="button" role="presentation" className="owl-next"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    
      </>
  );
}
