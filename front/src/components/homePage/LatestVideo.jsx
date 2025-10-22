import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../global.css"
import { useRef } from "react";



export default function LatestVideo() {
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
        breakpoint: 1000, // <=1000px
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 500, // <=500px
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
    <Slider ref={sliderRef} {...settings}>
      <div className="item">
              <div className="videotesti-cont">
                <iframe
                  width="100%"
                  height={200}
                  src="https://www.youtube.com/embed/qHxxmWySb6c?si=TXkwWEbi34eFc5dC"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="item">
              <div className="videotesti-cont">
                <iframe
                  width="100%"
                  height={200}
                  src="https://www.youtube.com/embed/sFFEvhlJP6Q?si=aZ_Ptns7W_eNLm1i"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="item">
              <div className="videotesti-cont">
                <iframe
                  width="100%"
                  height={200}
                  src="https://www.youtube.com/embed/qHxxmWySb6c?si=TXkwWEbi34eFc5dC"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                />
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
