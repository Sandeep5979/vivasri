import React from "react";
import Slider from "react-slick";


const ProfileDetailImage = ({ formData }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL_IMAGE;

  // Collect all existing images dynamically
  const photos = [
    formData.photo,
    formData.photo1,
    formData.photo2,
    formData.photo3,
    formData.photo4,
  ].filter(Boolean);

  if (photos.length === 0) {
    return (
      <div className="text-center">
        <img src="assets/img/no-image.jpg" alt="No Profile" style={{maxWidth:'100%'}} />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
    /* customPaging: () => (
    <div
      style={{
        color: "#999",
        fontSize: "20px",
        lineHeight: "10px",
      }}
    >
      -
    </div>
    ), */
    appendDots: dots => (
    <ul style={{ bottom: 0 }}> {dots} </ul>
    ),
  };

  return (
    <div className="profile-carousel">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img
              src={`${baseUrl}${photo}`}
              alt={`Profile ${index + 1}`}
              className="w-100 rounded"
              style={{ objectFit: "cover", maxHeight: "400px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProfileDetailImage;
