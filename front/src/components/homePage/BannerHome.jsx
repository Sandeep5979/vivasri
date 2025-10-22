import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function BannerHome() {
  return (
    <div className="swiper-container">
          <div className="swiper-wrapper">
          <Swiper
        modules={[Navigation, Pagination, Autoplay]}
         navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className="swiper-slide"
      >
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{
              backgroundImage: "url('/assets/img/slider/slider1.jpg')",
            }}
          >
            <div className="container SliderContentsWrapper d-none">
                    <div className="SliderContents">
                      <div data-swiper-parallax="300" className="slide-title">
                        <h2>Start control of your professional destiny</h2>
                      </div>
                      <div data-swiper-parallax="400" className="slide-text">
                        <p>
                          Astrology predictions are based on the position and
                          movements of planets and celestial bodies in the
                          Universe that impact our life quality.
                        </p>
                      </div>
                    </div>
                  </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{
              backgroundImage: "url('/assets/img/slider/slider2.jpg')",
            }}
          >
            <div className="container SliderContentsWrapper d-none">
                    <div className="SliderContents">
                      <div data-swiper-parallax="300" className="slide-title">
                        <h2>Start control of your professional destiny</h2>
                      </div>
                      <div data-swiper-parallax="400" className="slide-text">
                        <p>
                          Astrology predictions are based on the position and
                          movements of planets and celestial bodies in the
                          Universe that impact our life quality.
                        </p>
                      </div>
                    </div>
                  </div>
          </div>
        </SwiperSlide>

        
      </Swiper>
      </div>

            <div className="swiper-pagination" />
          <div className="custom-next">
          <div className="swiper-button-next" />
          </div>
          <div className="custom-prev">
          <div className="swiper-button-prev" />
          </div>

      </div>
      
  );
}
